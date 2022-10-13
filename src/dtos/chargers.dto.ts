import { IsString, IsBoolean } from 'class-validator';

export class CreateChargerDto {
  @IsString()
  public name: string;

  @IsString()
  public serialNumber: string;

  @IsString()
  public chargerType: string;

  @IsBoolean()
  public isActive: boolean;

  @IsString()
  public description: string;
}
