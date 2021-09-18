import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { Category, CategorySchema } from "./schema/category.schema";
import { CategoryTransformer } from "./transformer/category.transformer";

@Module({
    imports: [
      MongooseModule.forFeature([
        {name: Category.name, schema: CategorySchema},
      ])
    ],
    controllers: [CategoryController],
    providers: [CategoryService, CategoryTransformer],
    exports: [CategoryService, CategoryTransformer]
  })
  export class CategoryModule {}