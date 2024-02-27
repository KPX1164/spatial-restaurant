export interface StudentItem {
    id: number,
    name:string,
    surname:string,
    image:string,
    advisorId:string,
    comments: CommentItem[],
    course_list:string[]
}

export interface AdvisorItem {
    id: number,
    name:string,
    surname: string,
    image:string,
    email:string
}

export interface CommentItem {
    id: string
    text: string
    author: number
  }