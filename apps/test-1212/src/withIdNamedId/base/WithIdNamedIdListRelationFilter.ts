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
import { WithIdNamedIdWhereInput } from "./WithIdNamedIdWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WithIdNamedIdListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WithIdNamedIdWhereInput,
  })
  @ValidateNested()
  @Type(() => WithIdNamedIdWhereInput)
  @IsOptional()
  @Field(() => WithIdNamedIdWhereInput, {
    nullable: true,
  })
  every?: WithIdNamedIdWhereInput;

  @ApiProperty({
    required: false,
    type: () => WithIdNamedIdWhereInput,
  })
  @ValidateNested()
  @Type(() => WithIdNamedIdWhereInput)
  @IsOptional()
  @Field(() => WithIdNamedIdWhereInput, {
    nullable: true,
  })
  some?: WithIdNamedIdWhereInput;

  @ApiProperty({
    required: false,
    type: () => WithIdNamedIdWhereInput,
  })
  @ValidateNested()
  @Type(() => WithIdNamedIdWhereInput)
  @IsOptional()
  @Field(() => WithIdNamedIdWhereInput, {
    nullable: true,
  })
  none?: WithIdNamedIdWhereInput;
}
export { WithIdNamedIdListRelationFilter as WithIdNamedIdListRelationFilter };
