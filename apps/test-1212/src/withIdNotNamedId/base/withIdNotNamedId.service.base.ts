/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WithIdNotNamedId } from "@prisma/client";

export class WithIdNotNamedIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WithIdNotNamedIdCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNotNamedIdCountArgs>
  ): Promise<number> {
    return this.prisma.withIdNotNamedId.count(args);
  }

  async findMany<T extends Prisma.WithIdNotNamedIdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNotNamedIdFindManyArgs>
  ): Promise<WithIdNotNamedId[]> {
    return this.prisma.withIdNotNamedId.findMany(args);
  }
  async findOne<T extends Prisma.WithIdNotNamedIdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNotNamedIdFindUniqueArgs>
  ): Promise<WithIdNotNamedId | null> {
    return this.prisma.withIdNotNamedId.findUnique(args);
  }
  async create<T extends Prisma.WithIdNotNamedIdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNotNamedIdCreateArgs>
  ): Promise<WithIdNotNamedId> {
    return this.prisma.withIdNotNamedId.create<T>(args);
  }
  async update<T extends Prisma.WithIdNotNamedIdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNotNamedIdUpdateArgs>
  ): Promise<WithIdNotNamedId> {
    return this.prisma.withIdNotNamedId.update<T>(args);
  }
  async delete<T extends Prisma.WithIdNotNamedIdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WithIdNotNamedIdDeleteArgs>
  ): Promise<WithIdNotNamedId> {
    return this.prisma.withIdNotNamedId.delete(args);
  }
}
