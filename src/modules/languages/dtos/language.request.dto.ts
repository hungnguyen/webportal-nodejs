import { IsNotEmpty } from "class-validator";

export default class LanguageRequestDto {
    constructor(
        code: string,
        name: string,
        isDefault: boolean,
    ){
        this.code = code;
        this.name = name;
        this.isDefault = isDefault;
    }
    public code: string;
    public isDefault: boolean;

    @IsNotEmpty()
    public name: string;
}