import { IsNotEmpty } from "class-validator";

export default class PhraseRequestDto {
    constructor(
        key: string,
        value: string,
        isPin: boolean,
        languageId: string
    ){
        this.key = key;
        this.value = value;
        this.isPin = isPin;
        this.languageId = languageId;
    }
    @IsNotEmpty()
    public key: string;
    public value: string;
    public isPin: boolean;
    public languageId: string
}