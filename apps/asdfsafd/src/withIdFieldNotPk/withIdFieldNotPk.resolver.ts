import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WithIdFieldNotPKResolverBase } from "./base/withIdFieldNotPk.resolver.base";
import { WithIdFieldNotPK } from "./base/WithIdFieldNotPK";
import { WithIdFieldNotPKService } from "./withIdFieldNotPk.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WithIdFieldNotPK)
export class WithIdFieldNotPKResolver extends WithIdFieldNotPKResolverBase {
  constructor(
    protected readonly service: WithIdFieldNotPKService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
