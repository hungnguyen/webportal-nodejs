import { IsNotEmpty } from "class-validator";

export default class CustomerRequestDto {
    constructor(
        userName: string,
        password: string,
        email: string,
        fullName: string,
        idCard: string,
        address: string,
        country: string,
        phoneNumber: string,
        status: string,
        city: string,
        district: string,
        birthday: string,
        gender: string,
        image: string,
        ip: string,
        browser: string,
    ){
        this.image = image;
        this.status = status;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.idCard = idCard;
        this.address = address;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.district = district;
        this.birthday = birthday;
        this.gender = gender;
        this.ip = ip;
        this.browser = browser;
    }
    
    public userName: string;
    public password: string;
    @IsNotEmpty()
    public email: string;
    public fullName: string;
    public idCard: string;
    public address: string;
    public country: string;
    public phoneNumber: string;
    public status: string;
    public city: string;
    public district: string;
    public birthday: string;
    public gender: string;
    public image: string;
    public ip: string;
    public browser: string;
}