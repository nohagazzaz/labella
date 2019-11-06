import { Injectable } from '@angular/core';
import { doctor } from './doctor';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()

export class OurDoctorsService {
    public list_our_doctors: doctor[];
    public list: any;
    constructor(
        private firestore: AngularFirestore
    ) {
        this.list_our_doctors = []
    }
    getOurDoctors() {
        this.firestore.collection("doctors").snapshotChanges().subscribe((res: any) => {
            if (!this.list_our_doctors.length) {

                for (let r in res) {
                    this.list_our_doctors.push(res[r].payload.doc._document.proto.fields.name.stringValue)

                }
            } else {
                return this.list_our_doctors
            }
        })
        return this.list_our_doctors
    }
}