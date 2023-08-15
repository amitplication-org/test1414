/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WithIdFieldNotPKWhereInput } from "./WithIdFieldNotPKWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WithIdFieldNotPKListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WithIdFieldNotPKWhereInput,
  })
  @ValidateNested()
  @Type(() => WithIdFieldNotPKWhereInput)
  @IsOptional()
  @Field(() => WithIdFieldNotPKWhereInput, {
    nullable: true,
  })
  every?: WithIdFieldNotPKWhereInput;

  @ApiProperty({
    required: false,
    type: () => WithIdFieldNotPKWhereInput,
  })
  @ValidateNested()
  @Type(() => WithIdFieldNotPKWhereInput)
  @IsOptional()
  @Field(() => WithIdFieldNotPKWhereInput, {
    nullable: true,
  })
  some?: WithIdFieldNotPKWhereInput;

  @ApiProperty({
    required: false,
    type: () => WithIdFieldNotPKWhereInput,
  })
  @ValidateNested()
  @Type(() => WithIdFieldNotPKWhereInput)
  @IsOptional()
  @Field(() => WithIdFieldNotPKWhereInput, {
    nullable: true,
  })
  none?: WithIdFieldNotPKWhereInput;
}
export { WithIdFieldNotPKListRelationFilter as WithIdFieldNotPKListRelationFilter };