import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WithIdFieldNotPKServiceBase } from "./base/withIdFieldNotPk.service.base";

@Injectable()
export class WithIdFieldNotPKService extends WithIdFieldNotPKServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
