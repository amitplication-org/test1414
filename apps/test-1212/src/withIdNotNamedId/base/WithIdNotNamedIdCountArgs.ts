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
import { WithIdNotNamedIdWhereInput } from "./WithIdNotNamedIdWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WithIdNotNamedIdCountArgs {
  @ApiProperty({
    required: false,
    type: () => WithIdNotNamedIdWhereInput,
  })
  @Field(() => WithIdNotNamedIdWhereInput, { nullable: true })
  @Type(() => WithIdNotNamedIdWhereInput)
  where?: WithIdNotNamedIdWhereInput;
}

export { WithIdNotNamedIdCountArgs as WithIdNotNamedIdCountArgs };
