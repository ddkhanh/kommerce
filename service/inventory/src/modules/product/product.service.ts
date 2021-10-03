import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/service/crud.service';
import { Product } from './schema/product.schema';

const autoPopulation = (next: any) => {
  let me = this as any;
  me.populate('variants');
  next();
}

@Injectable()
export class ProductService extends CrudService<Product>{

  constructor(@InjectModel(Product.name) orgModel: Model<Product>) {
    super(orgModel);
    orgModel.schema.pre('findById',autoPopulation)
    orgModel.schema.pre('findByIdAndUpdate',autoPopulation)
  } 
}
