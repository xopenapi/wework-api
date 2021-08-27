import {
  AuthImpl,
  UsersImpl,
  CorpsImpl,
  MessageImpl,
  TagsImpl,
  ExternalcontactsImpl,
  GroupchatsImpl,
  GroupchatImpl,
  MediasImpl,
  AppchatsImpl,
  DepartmentsImpl,
  LinkedcorpsImpl,
  ServicesImpl,
  AgentsImpl,
  MenusImpl
} from "./operations";
import {
  Auth,
  Users,
  Corps,
  Message,
  Tags,
  Externalcontacts,
  Groupchats,
  Groupchat,
  Medias,
  Appchats,
  Departments,
  Linkedcorps,
  Services,
  Agents,
  Menus
} from "./operationsInterfaces";
import { WeworkApiContext } from "./weworkApiContext";
import { WeworkApiOptionalParams } from "./models";

export class WeworkApi extends WeworkApiContext {
  /**
   * Initializes a new instance of the WeworkApi class.
   * @param options The parameter options
   */
  constructor(options?: WeworkApiOptionalParams) {
    super(options);
    this.auth = new AuthImpl(this);
    this.users = new UsersImpl(this);
    this.corps = new CorpsImpl(this);
    this.message = new MessageImpl(this);
    this.tags = new TagsImpl(this);
    this.externalcontacts = new ExternalcontactsImpl(this);
    this.groupchats = new GroupchatsImpl(this);
    this.groupchat = new GroupchatImpl(this);
    this.medias = new MediasImpl(this);
    this.appchats = new AppchatsImpl(this);
    this.departments = new DepartmentsImpl(this);
    this.linkedcorps = new LinkedcorpsImpl(this);
    this.services = new ServicesImpl(this);
    this.agents = new AgentsImpl(this);
    this.menus = new MenusImpl(this);
  }

  auth: Auth;
  users: Users;
  corps: Corps;
  message: Message;
  tags: Tags;
  externalcontacts: Externalcontacts;
  groupchats: Groupchats;
  groupchat: Groupchat;
  medias: Medias;
  appchats: Appchats;
  departments: Departments;
  linkedcorps: Linkedcorps;
  services: Services;
  agents: Agents;
  menus: Menus;
}
