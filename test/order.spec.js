import { WhereProduct } from '../src/controller/firebase.js'
import { dataProduct} from '../src/controller/functions.js'
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Productos: {
      __doc__: {
        abc1d: {
          title: 'terminar la pildora',
          complete: false
        },
      }
    }
  }
}

describe('whereProduct', () => {
    it('Deberia traer los productos de la colleción productos de firebase')
    return WhereProduct("Almuerzo y cena").then(() =>  dataProduct (
      (ygyg) => {
        const result = 
      }
    )
    )
})


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addNote, getNotes, deleteNote } from "../src/controller/controller-firebase.js";
import { dataProduct } from '../src/controller/functions.js';

describe('lista de notas', () => {
  it('Debería porder traer una nota', (done) => {
    return addNote('preparar la pildora')
      .then(() => getNotes(
        (data) => {
          const result = data.find((Productos) => Productos.title === 'preparar la pildora');
          expect(result.title).toBe('preparar la pildora');
          done()
        }
      ))
  });
  it('Debería poder eliminar una nota', (done) => {
    return deleteNote('abc1d')
      .then(() => getNotes(
        (data) => {
          const result = data.find((note) => Productos.id === 'abc1d');
          expect(result).toBe(undefined);
          done()
        }
      ))
  })
})