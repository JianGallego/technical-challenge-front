export class Task {
    constructor(
      public id: string,
      public description?: string,
      public start?: Date,
      public end?: Date
    ) {}
  }