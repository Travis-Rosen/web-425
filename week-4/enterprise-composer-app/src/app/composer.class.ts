// Author: Travis Rosen
// Date: 09/28/2021
// Name: composer.class.ts
// Description: Composer class file




import { IComposer } from "./composer.interface";
export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Philip Glass", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Wolfgang Mozart", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 103, fullName: "George Benjamin", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Nico Muhly", genre: "Classical"
      },
    ]
  }
  //Return composers from list
  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
