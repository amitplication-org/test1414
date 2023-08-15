import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WithIdFieldNotPKService } from "./withIdFieldNotPk.service";
import { WithIdFieldNotPKControllerBase } from "./base/withIdFieldNotPk.controller.base";

@swagger.ApiTags("withIdFieldNotPks")
@common.Controller("withIdFieldNotPks")
export class WithIdFieldNotPKController extends WithIdFieldNotPKControllerBase {
  constructor(
    protected readonly service: WithIdFieldNotPKService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
