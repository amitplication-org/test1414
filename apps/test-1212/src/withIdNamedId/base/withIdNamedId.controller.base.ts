/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WithIdNamedIdService } from "../withIdNamedId.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WithIdNamedIdCreateInput } from "./WithIdNamedIdCreateInput";
import { WithIdNamedIdWhereInput } from "./WithIdNamedIdWhereInput";
import { WithIdNamedIdWhereUniqueInput } from "./WithIdNamedIdWhereUniqueInput";
import { WithIdNamedIdFindManyArgs } from "./WithIdNamedIdFindManyArgs";
import { WithIdNamedIdUpdateInput } from "./WithIdNamedIdUpdateInput";
import { WithIdNamedId } from "./WithIdNamedId";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WithIdNamedIdControllerBase {
  constructor(
    protected readonly service: WithIdNamedIdService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WithIdNamedId })
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: WithIdNamedIdCreateInput
  ): Promise<WithIdNamedId> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WithIdNamedId] })
  @ApiNestedQuery(WithIdNamedIdFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<WithIdNamedId[]> {
    const args = plainToClass(WithIdNamedIdFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WithIdNamedId })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: WithIdNamedIdWhereUniqueInput
  ): Promise<WithIdNamedId | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WithIdNamedId })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: WithIdNamedIdWhereUniqueInput,
    @common.Body() data: WithIdNamedIdUpdateInput
  ): Promise<WithIdNamedId | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WithIdNamedId })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WithIdNamedId",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: WithIdNamedIdWhereUniqueInput
  ): Promise<WithIdNamedId | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
