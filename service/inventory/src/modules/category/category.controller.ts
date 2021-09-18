import { NotFoundException, UnExpectedException } from "@kommerce/common";
import { Body, Controller } from "@nestjs/common";
import { Observable } from "rxjs";
import { JoiValidationPipe } from "../../pipe/joi.pipe";
import { CategoryDto, CategoryListDto, CategoryRequest, CategoryServiceController, CategoryServiceControllerMethods } from "../../protobuf/tsgen/category";
import { ObjectId, SearchRequest } from "../../protobuf/tsgen/common";
import { UpdateProductValidator } from "../product/validator/product.validator";
import { CategoryService } from "./category.service";
import { CategoryTransformer } from "./transformer/category.transformer";
import { CreateCategoryValidator, MongoIdValidator, SearchRequestValidator } from "./validator/category.validator";

@Controller()
@CategoryServiceControllerMethods()
export class CategoryController implements CategoryServiceController {
    constructor(private readonly ctgSvc: CategoryService,
        private readonly ctgTrans: CategoryTransformer
    ) { }

    async createCategory(@Body(new JoiValidationPipe(CreateCategoryValidator)) request: CategoryRequest): Promise<CategoryDto> {
        let category = this.ctgTrans.from(request);
        let saved = await this.ctgSvc.create(category);
        return this.ctgTrans.to(saved);
    }
    async updateCategory(@Body(new JoiValidationPipe(UpdateProductValidator)) request: CategoryDto): Promise<CategoryDto> {
        let category = this.ctgTrans.from(request);
        let saved = await this.ctgSvc.update(category);
        if(saved) {
            return this.ctgTrans.to(saved);
        }
        throw UnExpectedException(`Something went wrong, unabled to save ${request.id}`)
    }
    async deleteCategory(@Body(new JoiValidationPipe(MongoIdValidator)) request: ObjectId): Promise<CategoryDto> {
        let deleted = await this.ctgSvc.delete(request.id);
        if(deleted) {
            return this.ctgTrans.to(deleted);
        }
        throw NotFoundException(`Category ${request.id} is not found`)

    }
    async search(@Body(new JoiValidationPipe(SearchRequestValidator)) request: SearchRequest): Promise<CategoryListDto> {
        let categories = await this.ctgSvc.findAll()
        return <CategoryListDto> {
            categories: categories.map(e => this.ctgTrans.to(e))
        }
    }

}