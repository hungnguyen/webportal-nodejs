import { UsersRoute } from "@modules/users";
import { App } from "./app";
import { IndexRoute } from "./modules/index";
import AuthRoute from "@modules/auth/auth.route";
import { BannersRoute } from "@modules/banners";
import { CategoriesRoute } from "@modules/categories";
import { ContentTypesRoute } from "@modules/content_types";
import { ContentsRoute } from "@modules/contents";
import { CustomersRoute } from "@modules/customers";
import { LanguagesRoute } from "@modules/languages";
import { MailBoxesRoute } from "@modules/mailboxes";
import { OrdersRoute } from "@modules/orders";
import { PhrasesRoute } from "@modules/phrases";
import { ContentFilesRoute } from "@modules/content_files";
import { OrderItemsRoute } from "@modules/order_items";

const routes = [
    new IndexRoute(),
    new UsersRoute(),
    new AuthRoute(),
    new BannersRoute(),
    new CategoriesRoute(),
    new ContentTypesRoute(),
    new ContentsRoute(),
    new CustomersRoute(),
    new LanguagesRoute(),
    new MailBoxesRoute(),
    new OrdersRoute(),
    new PhrasesRoute(),
    new ContentFilesRoute(),
    new OrderItemsRoute()
];
const app = new App(routes);

app.listen();