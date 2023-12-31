/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WithIdNamedId } from "@prisma/client";

export class WithIdNamedIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WithIdNamedIdCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNamedIdCountArgs>
  ): Promise<number> {
    return this.prisma.withIdNamedId.count(args);
  }

  async findMany<T extends Prisma.WithIdNamedIdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNamedIdFindManyArgs>
  ): Promise<WithIdNamedId[]> {
    return this.prisma.withIdNamedId.findMany(args);
  }
  async findOne<T extends Prisma.WithIdNamedIdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNamedIdFindUniqueArgs>
  ): Promise<WithIdNamedId | null> {
    return this.prisma.withIdNamedId.findUnique(args);
  }
  async create<T extends Prisma.WithIdNamedIdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNamedIdCreateArgs>
  ): Promise<WithIdNamedId> {
    return this.prisma.withIdNamedId.create<T>(args);
  }
  async update<T extends Prisma.WithIdNamedIdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNamedIdUpdateArgs>
  ): Promise<WithIdNamedId> {
    return this.prisma.withIdNamedId.update<T>(args);
  }
  async delete<T extends Prisma.WithIdNamedIdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNamedIdDeleteArgs>
  ): Promise<WithIdNamedId> {
    return this.prisma.withIdNamedId.delete(args);
  }
}
