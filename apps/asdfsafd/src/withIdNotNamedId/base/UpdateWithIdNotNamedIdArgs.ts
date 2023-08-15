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
import { WithIdNotNamedIdWhereUniqueInput } from "./WithIdNotNamedIdWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WithIdNotNamedIdUpdateInput } from "./WithIdNotNamedIdUpdateInput";

@ArgsType()
class UpdateWithIdNotNamedIdArgs {
  @ApiProperty({
    required: true,
    type: () => WithIdNotNamedIdWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WithIdNotNamedIdWhereUniqueInput)
  @Field(() => WithIdNotNamedIdWhereUniqueInput, { nullable: false })
  where!: WithIdNotNamedIdWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WithIdNotNamedIdUpdateInput,
  })
  @ValidateNested()
  @Type(() => WithIdNotNamedIdUpdateInput)
  @Field(() => WithIdNotNamedIdUpdateInput, { nullable: false })
  data!: WithIdNotNamedIdUpdateInput;
}

export { UpdateWithIdNotNamedIdArgs as UpdateWithIdNotNamedIdArgs };
