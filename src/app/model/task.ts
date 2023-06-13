export class Task {
    constructor(
      public id: string,
      public description?: string,
      public end?: Date,
      public priority?: string
    ) {}
  }