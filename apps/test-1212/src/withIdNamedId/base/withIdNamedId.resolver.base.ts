/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateWithIdNamedIdArgs } from "./CreateWithIdNamedIdArgs";
import { UpdateWithIdNamedIdArgs } from "./UpdateWithIdNamedIdArgs";
import { DeleteWithIdNamedIdArgs } from "./DeleteWithIdNamedIdArgs";
import { WithIdNamedIdCountArgs } from "./WithIdNamedIdCountArgs";
import { WithIdNamedIdFindManyArgs } from "./WithIdNamedIdFindManyArgs";
import { WithIdNamedIdFindUniqueArgs } from "./WithIdNamedIdFindUniqueArgs";
import { WithIdNamedId } from "./WithIdNamedId";
import { WithIdNamedIdService } from "../withIdNamedId.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WithIdNamedId)
export class WithIdNamedIdResolverBase {
  constructor(
    protected readonly service: WithIdNamedIdService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "read",
    possession: "any",
  })
  async _withIdNamedIdsMeta(
    @graphql.Args() args: WithIdNamedIdCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WithIdNamedId])
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "read",
    possession: "any",
  })
  async withIdNamedIds(
    @graphql.Args() args: WithIdNamedIdFindManyArgs
  ): Promise<WithIdNamedId[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WithIdNamedId, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "read",
    possession: "own",
  })
  async withIdNamedId(
    @graphql.Args() args: WithIdNamedIdFindUniqueArgs
  ): Promise<WithIdNamedId | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WithIdNamedId)
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "create",
    possession: "any",
  })
  async createWithIdNamedId(
    @graphql.Args() args: CreateWithIdNamedIdArgs
  ): Promise<WithIdNamedId> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WithIdNamedId)
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "update",
    possession: "any",
  })
  async updateWithIdNamedId(
    @graphql.Args() args: UpdateWithIdNamedIdArgs
  ): Promise<WithIdNamedId | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WithIdNamedId)
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "delete",
    possession: "any",
  })
  async deleteWithIdNamedId(
    @graphql.Args() args: DeleteWithIdNamedIdArgs
  ): Promise<WithIdNamedId | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
