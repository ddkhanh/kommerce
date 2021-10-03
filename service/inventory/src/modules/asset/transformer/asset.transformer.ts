import { Transformer } from '@kommerce/common';
import { Injectable } from '@nestjs/common';
import { AssetDto, CreateAssetRequest, UpdateAssetRequest } from '../../../grpc/asset';
import { Asset } from '../schema/asset.schema';


type AssetRequest = CreateAssetRequest | UpdateAssetRequest;

@Injectable()
export class AssetTransformer implements Transformer<AssetRequest, AssetDto, Asset> {
    
    from(req: AssetRequest | AssetDto): Asset {
        let asset = <Asset> {
        }
        if('conditions' in req ) {
            if(req.conditions && req.data) {
                asset = this.from(req.data);
                asset.id = req.conditions.id;
                asset.version = req.conditions.version;
            }
        } else {
            asset = <Asset> {
                name: req.name,
                description: req.description,
                fileSize: req.fileSize,
                height: req.height,
                width: req.width,
                type: req.type,
                source: req.source,
                preview: req.preview,
            }
        }
        return asset;
    }
    to(doc: Asset): AssetDto {
       return <AssetDto> {
         id: doc.id,
         name: doc.name,
         type: doc.type,
         height: doc.height,
         width: doc.width,
         source: doc.source,
         version: doc.version,
         description: doc.description,
         fileSize: doc.fileSize,
         preview: doc.preview   
       }
    }

}