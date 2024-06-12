import {IResolvers} from "@graphql-tools/utils";
import {Db} from "mongodb";
import {DEVELOPERS_COLLECTION} from '../../mongo/collections'

export const developerResolver: IResolvers = {
    Query: {
        async getDevelopers(root: void, args: any, context: Db) {
            try {
                return await context.collection(DEVELOPERS_COLLECTION)
                    .insertOne(args.developer)
                return "Developer added successfully"
            } catch (error) {
                console.log(error)
            }
        },
    },
    Mutation: {
        async createDeveloper(root: void, args: any, context: Db) {
            try {
                await context.collection(DEVELOPERS_COLLECTION)
                    .insertOne(args.developer)
                return "Developer added successfully"
            } catch (error) {
                console.log(error)
            }
        }
    }
}