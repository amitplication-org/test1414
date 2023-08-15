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
import { WithIdFieldNotPKWhereUniqueInput } from "./WithIdFieldNotPKWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WithIdFieldNotPKUpdateInput } from "./WithIdFieldNotPKUpdateInput";

@ArgsType()
class UpdateWithIdFieldNotPKArgs {
  @ApiProperty({
    required: true,
    type: () => WithIdFieldNotPKWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WithIdFieldNotPKWhereUniqueInput)
  @Field(() => WithIdFieldNotPKWhereUniqueInput, { nullable: false })
  where!: WithIdFieldNotPKWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WithIdFieldNotPKUpdateInput,
  })
  @ValidateNested()
  @Type(() => WithIdFieldNotPKUpdateInput)
  @Field(() => WithIdFieldNotPKUpdateInput, { nullable: false })
  data!: WithIdFieldNotPKUpdateInput;
}

export { UpdateWithIdFieldNotPKArgs as UpdateWithIdFieldNotPKArgs };
