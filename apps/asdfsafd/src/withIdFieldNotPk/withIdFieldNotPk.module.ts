import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WithIdFieldNotPKModuleBase } from "./base/withIdFieldNotPk.module.base";
import { WithIdFieldNotPKService } from "./withIdFieldNotPk.service";
import { WithIdFieldNotPKController } from "./withIdFieldNotPk.controller";
import { WithIdFieldNotPKResolver } from "./withIdFieldNotPk.resolver";

@Module({
  imports: [WithIdFieldNotPKModuleBase, forwardRef(() => AuthModule)],
  controllers: [WithIdFieldNotPKController],
  providers: [WithIdFieldNotPKService, WithIdFieldNotPKResolver],
  exports: [WithIdFieldNotPKService],
})
export class WithIdFieldNotPKModule {}
