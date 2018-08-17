export interface UserSignUp {
    UserName: string,
    Email: string,
    Password: string,
    Phone: string,
    Address: string,
}

export interface UserAuth {
    Email: string,
    Password: string,
}

export interface UserProfile {
    UserId:string,
    UserName: string,
    Phone: string,
    Address: string,
    Picture: string,
}