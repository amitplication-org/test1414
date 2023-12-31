/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WithIdNamedIdWhereInput } from "./WithIdNamedIdWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WithIdNamedIdOrderByInput } from "./WithIdNamedIdOrderByInput";

@ArgsType()
class WithIdNamedIdFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WithIdNamedIdWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WithIdNamedIdWhereInput, { nullable: true })
  @Type(() => WithIdNamedIdWhereInput)
  where?: WithIdNamedIdWhereInput;

  @ApiProperty({
    required: false,
    type: [WithIdNamedIdOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WithIdNamedIdOrderByInput], { nullable: true })
  @Type(() => WithIdNamedIdOrderByInput)
  orderBy?: Array<WithIdNamedIdOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WithIdNamedIdFindManyArgs as WithIdNamedIdFindManyArgs };
