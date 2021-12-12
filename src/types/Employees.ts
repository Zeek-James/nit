export interface EState {
  employees: {
      firstName: string,
      lastName: string,
      age: number,
      jobDescription: string,
      phone: number,
      marital: string,
      address: string,
      image?: string
    }[]
}
  
export interface FState {
  details: {
      firstName: string,
      lastName: string,
      age: number,
      jobDescription: string,
      phone: number,
      marital: string,
      address: string,
      image?: string
    }[]
  }