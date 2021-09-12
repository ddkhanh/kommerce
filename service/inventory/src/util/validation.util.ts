import { Types } from 'mongoose';
export class ValidationUtil {
    public static isValidObjectId(id: string | Types.ObjectId | undefined | null): boolean {
        if (id && Types.ObjectId.isValid(id)) {
            return true;
        }
        return false;
    }
}