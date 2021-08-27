import * as coreClient from "@azure/core-client";

export const TokenRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TokenRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      accessToken: {
        serializedName: "access_token",
        type: {
          name: "String"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetApiDomainIpRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetApiDomainIpRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      ipList: {
        serializedName: "ip_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateUserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateUserReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      alias: {
        serializedName: "alias",
        type: {
          name: "String"
        }
      },
      mobile: {
        serializedName: "mobile",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      telephone: {
        serializedName: "telephone",
        type: {
          name: "String"
        }
      },
      isLeaderInDept: {
        serializedName: "is_leader_in_dept",
        type: {
          name: "Number"
        }
      },
      avatarMediaid: {
        serializedName: "avatar_mediaid",
        type: {
          name: "String"
        }
      },
      enable: {
        serializedName: "enable",
        type: {
          name: "Number"
        }
      },
      extattr: {
        serializedName: "extattr",
        type: {
          name: "Composite",
          className: "ExtAttrs"
        }
      }
    }
  }
};

export const ExtAttrs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtAttrs",
    modelProperties: {
      attrs: {
        serializedName: "attrs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExtAttr"
            }
          }
        }
      }
    }
  }
};

export const ExtAttr: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtAttr",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "TextMsg"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TextMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextMsg",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BaseResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseResponse",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetUserRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUserRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      mobile: {
        serializedName: "mobile",
        type: {
          name: "String"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      isLeaderInDept: {
        serializedName: "is_leader_in_dept",
        type: {
          name: "Number"
        }
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "String"
        }
      },
      thumbAvatar: {
        serializedName: "thumb_avatar",
        type: {
          name: "String"
        }
      },
      telephone: {
        serializedName: "telephone",
        type: {
          name: "String"
        }
      },
      alias: {
        serializedName: "alias",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      openUserid: {
        serializedName: "open_userid",
        type: {
          name: "String"
        }
      },
      mainDepartment: {
        serializedName: "main_department",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      qrCode: {
        serializedName: "qr_code",
        type: {
          name: "String"
        }
      },
      externalPosition: {
        serializedName: "external_position",
        type: {
          name: "String"
        }
      },
      externalProfile: {
        serializedName: "external_profile",
        type: {
          name: "Composite",
          className: "ExternalProfile"
        }
      },
      extattr: {
        serializedName: "extattr",
        type: {
          name: "Composite",
          className: "ExtAttrs"
        }
      }
    }
  }
};

export const ExternalProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalProfile",
    modelProperties: {
      externalCorpName: {
        serializedName: "external_corp_name",
        type: {
          name: "String"
        }
      },
      externalAttr: {
        serializedName: "external_attr",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExtAttr"
            }
          }
        }
      }
    }
  }
};

export const UpdateUserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateUserReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      mobile: {
        serializedName: "mobile",
        type: {
          name: "String"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      isLeaderInDept: {
        serializedName: "is_leader_in_dept",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      enable: {
        serializedName: "enable",
        type: {
          name: "Number"
        }
      },
      avatarMediaid: {
        serializedName: "avatar_mediaid",
        type: {
          name: "String"
        }
      },
      telephone: {
        serializedName: "telephone",
        type: {
          name: "String"
        }
      },
      alias: {
        serializedName: "alias",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      mainDepartment: {
        serializedName: "main_department",
        type: {
          name: "Number"
        }
      },
      extattr: {
        serializedName: "extattr",
        type: {
          name: "Composite",
          className: "ExtAttrs"
        }
      },
      externalPosition: {
        serializedName: "external_position",
        type: {
          name: "String"
        }
      },
      externalProfile: {
        serializedName: "external_profile",
        type: {
          name: "Composite",
          className: "ExternalProfile"
        }
      }
    }
  }
};

export const BatchDeleteUserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchDeleteUserReq",
    modelProperties: {
      useridlist: {
        serializedName: "useridlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SimplelistRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SimplelistRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SimplelistRspUserlistItem"
            }
          }
        }
      }
    }
  }
};

export const SimplelistRspUserlistItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SimplelistRspUserlistItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      openUserid: {
        serializedName: "open_userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListUserRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListUserRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "User"
            }
          }
        }
      }
    }
  }
};

export const User: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      mobile: {
        serializedName: "mobile",
        type: {
          name: "String"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      isLeaderInDept: {
        serializedName: "is_leader_in_dept",
        type: {
          name: "Number"
        }
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "String"
        }
      },
      thumbAvatar: {
        serializedName: "thumb_avatar",
        type: {
          name: "String"
        }
      },
      telephone: {
        serializedName: "telephone",
        type: {
          name: "String"
        }
      },
      alias: {
        serializedName: "alias",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      openUserid: {
        serializedName: "open_userid",
        type: {
          name: "String"
        }
      },
      mainDepartment: {
        serializedName: "main_department",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      qrCode: {
        serializedName: "qr_code",
        type: {
          name: "String"
        }
      },
      externalPosition: {
        serializedName: "external_position",
        type: {
          name: "String"
        }
      },
      externalProfile: {
        serializedName: "external_profile",
        type: {
          name: "Composite",
          className: "ExternalProfile"
        }
      },
      extattr: {
        serializedName: "extattr",
        type: {
          name: "Composite",
          className: "ExtAttrs"
        }
      },
      enable: {
        serializedName: "enable",
        type: {
          name: "Number"
        }
      },
      hideMobile: {
        serializedName: "hide_mobile",
        type: {
          name: "Number"
        }
      },
      englishName: {
        serializedName: "english_name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConvertToOpenidReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConvertToOpenidReq",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConvertToOpenidRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConvertToOpenidRsp",
    modelProperties: {
      openid: {
        serializedName: "openid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InviteReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InviteReq",
    modelProperties: {
      user: {
        serializedName: "user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      party: {
        serializedName: "party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const InviteRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InviteRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      invaliduser: {
        serializedName: "invaliduser",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      invalidparty: {
        serializedName: "invalidparty",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      invalidtag: {
        serializedName: "invalidtag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetJoinQrcodeRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetJoinQrcodeRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      joinQrcode: {
        serializedName: "join_qrcode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetActiveStatRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetActiveStatRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      activeCnt: {
        serializedName: "active_cnt",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SendMessageReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendMessageReq",
    modelProperties: {
      touser: {
        serializedName: "touser",
        type: {
          name: "String"
        }
      },
      toparty: {
        serializedName: "toparty",
        type: {
          name: "String"
        }
      },
      totag: {
        serializedName: "totag",
        type: {
          name: "String"
        }
      },
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "TextMsg"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "ImageMsg"
        }
      },
      voice: {
        serializedName: "voice",
        type: {
          name: "Composite",
          className: "VoiceMsg"
        }
      },
      video: {
        serializedName: "video",
        type: {
          name: "Composite",
          className: "VideoMsg"
        }
      },
      textcard: {
        serializedName: "textcard",
        type: {
          name: "Composite",
          className: "TextcardMsg"
        }
      },
      news: {
        serializedName: "news",
        type: {
          name: "Composite",
          className: "NewsMsg"
        }
      },
      mpnews: {
        serializedName: "mpnews",
        type: {
          name: "Composite",
          className: "MPNewsMsg"
        }
      },
      markdown: {
        serializedName: "markdown",
        type: {
          name: "Composite",
          className: "MarkdownMsg"
        }
      },
      miniprogramNotice: {
        serializedName: "miniprogram_notice",
        type: {
          name: "Composite",
          className: "MiniProgramMsg"
        }
      },
      taskcard: {
        serializedName: "taskcard",
        type: {
          name: "Composite",
          className: "TaskcardMsg"
        }
      }
    }
  }
};

export const ImageMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageMsg",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VoiceMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VoiceMsg",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VideoMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VideoMsg",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TextcardMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextcardMsg",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      btntxt: {
        serializedName: "btntxt",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NewsMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NewsMsg",
    modelProperties: {
      articles: {
        serializedName: "articles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArticleMsg"
            }
          }
        }
      }
    }
  }
};

export const ArticleMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArticleMsg",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MPNewsMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MPNewsMsg",
    modelProperties: {
      articles: {
        serializedName: "articles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MPArticleMsg"
            }
          }
        }
      }
    }
  }
};

export const MPArticleMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MPArticleMsg",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      thumbMediaId: {
        serializedName: "thumb_media_id",
        type: {
          name: "String"
        }
      },
      author: {
        serializedName: "author",
        type: {
          name: "String"
        }
      },
      contentSourceUrl: {
        serializedName: "content_source_url",
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      digest: {
        serializedName: "digest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MarkdownMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MarkdownMsg",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MiniProgramMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MiniProgramMsg",
    modelProperties: {
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      emphasisFirstItem: {
        serializedName: "emphasis_first_item",
        type: {
          name: "Boolean"
        }
      },
      contentItem: {
        serializedName: "content_item",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MiniProgramMsgContentItem"
            }
          }
        }
      }
    }
  }
};

export const MiniProgramMsgContentItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MiniProgramMsgContentItem",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TaskcardMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TaskcardMsg",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      taskId: {
        serializedName: "task_id",
        type: {
          name: "String"
        }
      },
      btn: {
        serializedName: "btn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Btn"
            }
          }
        }
      }
    }
  }
};

export const Btn: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Btn",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      replaceName: {
        serializedName: "replace_name",
        type: {
          name: "String"
        }
      },
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      },
      isBold: {
        serializedName: "is_bold",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SendMessageRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendMessageRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      invaliduser: {
        serializedName: "invaliduser",
        type: {
          name: "String"
        }
      },
      invalidparty: {
        serializedName: "invalidparty",
        type: {
          name: "String"
        }
      },
      invalidtag: {
        serializedName: "invalidtag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateTaskcardReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateTaskcardReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      taskId: {
        serializedName: "task_id",
        type: {
          name: "String"
        }
      },
      replaceName: {
        serializedName: "replace_name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateTaskcardRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateTaskcardRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      invaliduser: {
        serializedName: "invaliduser",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateTagReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateTagReq",
    modelProperties: {
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      },
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CreateTagRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateTagRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UpdateTagReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateTagReq",
    modelProperties: {
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Number"
        }
      },
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddTagUsersReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddTagUsersReq",
    modelProperties: {
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Number"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      partylist: {
        serializedName: "partylist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const DeleteTagUsersReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeleteTagUsersReq",
    modelProperties: {
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Number"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      partylist: {
        serializedName: "partylist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GetTagUsersRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTagUsersRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetTagUsersRspUserlistItem"
            }
          }
        }
      },
      partylist: {
        serializedName: "partylist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GetTagUsersRspUserlistItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTagUsersRspUserlistItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetTagListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTagListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      taglist: {
        serializedName: "taglist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TagListInfo"
            }
          }
        }
      }
    }
  }
};

export const TagListInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagListInfo",
    modelProperties: {
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Number"
        }
      },
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetFollowUserListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetFollowUserListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      followUser: {
        serializedName: "follow_user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const AddContactWayReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayReq",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      scene: {
        serializedName: "scene",
        type: {
          name: "Number"
        }
      },
      style: {
        serializedName: "style",
        type: {
          name: "Number"
        }
      },
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      skipVerify: {
        serializedName: "skip_verify",
        type: {
          name: "Boolean"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      party: {
        serializedName: "party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      isTemp: {
        serializedName: "is_temp",
        type: {
          name: "Boolean"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      conclusions: {
        serializedName: "conclusions",
        type: {
          name: "Composite",
          className: "AddContactWayReqConclusions"
        }
      }
    }
  }
};

export const AddContactWayReqConclusions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayReqConclusions",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "AddContactWayReqConclusionsText"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "AddContactWayReqConclusionsImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "AddContactWayReqConclusionsLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "AddContactWayReqConclusionsMiniprogram"
        }
      }
    }
  }
};

export const AddContactWayReqConclusionsText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayReqConclusionsText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddContactWayReqConclusionsImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayReqConclusionsImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddContactWayReqConclusionsLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayReqConclusionsLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddContactWayReqConclusionsMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayReqConclusionsMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddContactWayRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddContactWayRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      configId: {
        serializedName: "config_id",
        type: {
          name: "String"
        }
      },
      qrCode: {
        serializedName: "qr_code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetContactWayReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayReq",
    modelProperties: {
      configId: {
        serializedName: "config_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetContactWayRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      contactWay: {
        serializedName: "contact_way",
        type: {
          name: "Composite",
          className: "GetContactWayRspContactWay"
        }
      }
    }
  }
};

export const GetContactWayRspContactWay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRspContactWay",
    modelProperties: {
      configId: {
        serializedName: "config_id",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      scene: {
        serializedName: "scene",
        type: {
          name: "Number"
        }
      },
      style: {
        serializedName: "style",
        type: {
          name: "Number"
        }
      },
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      skipVerify: {
        serializedName: "skip_verify",
        type: {
          name: "Boolean"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      party: {
        serializedName: "party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      isTemp: {
        serializedName: "is_temp",
        type: {
          name: "Boolean"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      conclusions: {
        serializedName: "conclusions",
        type: {
          name: "Composite",
          className: "GetContactWayRspContactWayConclusions"
        }
      }
    }
  }
};

export const GetContactWayRspContactWayConclusions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRspContactWayConclusions",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "GetContactWayRspContactWayConclusionsText"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "GetContactWayRspContactWayConclusionsImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "GetContactWayRspContactWayConclusionsLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "GetContactWayRspContactWayConclusionsMiniprogram"
        }
      }
    }
  }
};

export const GetContactWayRspContactWayConclusionsText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRspContactWayConclusionsText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetContactWayRspContactWayConclusionsImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRspContactWayConclusionsImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetContactWayRspContactWayConclusionsLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRspContactWayConclusionsLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetContactWayRspContactWayConclusionsMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetContactWayRspContactWayConclusionsMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateContactWayReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactWayReq",
    modelProperties: {
      configId: {
        serializedName: "config_id",
        type: {
          name: "String"
        }
      },
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      skipVerify: {
        serializedName: "skip_verify",
        type: {
          name: "Boolean"
        }
      },
      style: {
        serializedName: "style",
        type: {
          name: "Number"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      party: {
        serializedName: "party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      },
      chatExpiresIn: {
        serializedName: "chat_expires_in",
        type: {
          name: "Number"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      conclusions: {
        serializedName: "conclusions",
        type: {
          name: "Composite",
          className: "UpdateContactWayReqConclusions"
        }
      }
    }
  }
};

export const UpdateContactWayReqConclusions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactWayReqConclusions",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "UpdateContactWayReqConclusionsText"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "UpdateContactWayReqConclusionsImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "UpdateContactWayReqConclusionsLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "UpdateContactWayReqConclusionsMiniprogram"
        }
      }
    }
  }
};

export const UpdateContactWayReqConclusionsText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactWayReqConclusionsText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateContactWayReqConclusionsImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactWayReqConclusionsImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateContactWayReqConclusionsLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactWayReqConclusionsLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateContactWayReqConclusionsMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateContactWayReqConclusionsMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DelContactWayReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DelContactWayReq",
    modelProperties: {
      configId: {
        serializedName: "config_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloseTempChatReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloseTempChatReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetExternalContactListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetExternalContactDetailRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactDetailRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      followUser: {
        serializedName: "follow_user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetExternalContactDetailRspFollowUserItem"
            }
          }
        }
      },
      externalContact: {
        serializedName: "external_contact",
        type: {
          name: "Composite",
          className: "GetExternalContactDetailRspExternalContact"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspFollowUserItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactDetailRspFollowUserItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createtime: {
        serializedName: "createtime",
        type: {
          name: "Number"
        }
      },
      remarkCorpName: {
        serializedName: "remark_corp_name",
        type: {
          name: "String"
        }
      },
      operUserid: {
        serializedName: "oper_userid",
        type: {
          name: "String"
        }
      },
      addWay: {
        serializedName: "add_way",
        type: {
          name: "Number"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      remarkMobiles: {
        serializedName: "remark_mobiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "Components18Bg4T3SchemasGetexternalcontactdetailrspPropertiesFollowUserItemsPropertiesTagsItems"
            }
          }
        }
      }
    }
  }
};

export const Components18Bg4T3SchemasGetexternalcontactdetailrspPropertiesFollowUserItemsPropertiesTagsItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Components18Bg4T3SchemasGetexternalcontactdetailrspPropertiesFollowUserItemsPropertiesTagsItems",
    modelProperties: {
      groupName: {
        serializedName: "group_name",
        type: {
          name: "String"
        }
      },
      tagName: {
        serializedName: "tag_name",
        type: {
          name: "String"
        }
      },
      tagId: {
        serializedName: "tag_id",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactDetailRspExternalContact",
    modelProperties: {
      externalContact: {
        serializedName: "external_contact",
        type: {
          name: "Composite",
          className: "GetExternalContactDetailRspExternalContactExternalContact"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContactExternalContact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactDetailRspExternalContactExternalContact",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      },
      corpFullName: {
        serializedName: "corp_full_name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      externalProfile: {
        serializedName: "external_profile",
        type: {
          name: "Composite",
          className: "GetExternalContactDetailRspExternalContactExternalProfile"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContactExternalProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactDetailRspExternalContactExternalProfile",
    modelProperties: {
      externalAttr: {
        serializedName: "external_attr",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItem"
            }
          }
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className:
            "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemWeb"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className:
            "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemText"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className:
            "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemMiniprogram"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactDetailRspExternalContactExternalProfileExternalAttrItemMiniprogram",
    modelProperties: {
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      pagepath: {
        serializedName: "pagepath",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetExternalContactBatchUserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactBatchUserReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactBatchUserRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      externalContactList: {
        serializedName: "external_contact_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetExternalContactBatchUserRspExternalContactListItem"
            }
          }
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRspExternalContactListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetExternalContactBatchUserRspExternalContactListItem",
    modelProperties: {
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createtime: {
        serializedName: "createtime",
        type: {
          name: "Number"
        }
      },
      tagId: {
        serializedName: "tag_id",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      remarkCorpName: {
        serializedName: "remark_corp_name",
        type: {
          name: "String"
        }
      },
      remarkMobiles: {
        serializedName: "remark_mobiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      operUserid: {
        serializedName: "oper_userid",
        type: {
          name: "String"
        }
      },
      addWay: {
        serializedName: "add_way",
        type: {
          name: "Number"
        }
      },
      externalContact: {
        serializedName: "external_contact",
        type: {
          name: "Composite",
          className:
            "GetExternalContactBatchUserRspExternalContactListItemExternalContact"
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRspExternalContactListItemExternalContact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactBatchUserRspExternalContactListItemExternalContact",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      },
      corpFullName: {
        serializedName: "corp_full_name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      externalProfile: {
        serializedName: "external_profile",
        type: {
          name: "Composite",
          className:
            "ComponentsJey806SchemasGetexternalcontactbatchuserrspPropertiesExternalContactListItemsPropertiesExternalContactPropertiesExternalProfile"
        }
      }
    }
  }
};

export const ComponentsJey806SchemasGetexternalcontactbatchuserrspPropertiesExternalContactListItemsPropertiesExternalContactPropertiesExternalProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ComponentsJey806SchemasGetexternalcontactbatchuserrspPropertiesExternalContactListItemsPropertiesExternalContactPropertiesExternalProfile",
    modelProperties: {
      externalAttr: {
        serializedName: "external_attr",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "GetExternalContactBatchUserRspExternalContactListPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRspExternalContactListPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactBatchUserRspExternalContactListPropertiesItemsItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className:
            "GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemWeb"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className:
            "GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemText"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className:
            "GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemMiniprogram"
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "GetExternalContactBatchUserRspExternalContactListItemExternalContactExternalProfileExternalAttrItemMiniprogram",
    modelProperties: {
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      pagepath: {
        serializedName: "pagepath",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateExternalContactRemarkReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateExternalContactRemarkReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      remarkCompany: {
        serializedName: "remark_company",
        type: {
          name: "String"
        }
      },
      remarkMobiles: {
        serializedName: "remark_mobiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      remarkPicMediaid: {
        serializedName: "remark_pic_mediaid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetCorpTagListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetCorpTagListReq",
    modelProperties: {
      tagId: {
        serializedName: "tag_id",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      groupId: {
        serializedName: "group_id",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetCorpTagListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetCorpTagListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      tagGroup: {
        serializedName: "tag_group",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetCorpTagListRspTagGroupItem"
            }
          }
        }
      }
    }
  }
};

export const GetCorpTagListRspTagGroupItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetCorpTagListRspTagGroupItem",
    modelProperties: {
      groupId: {
        serializedName: "group_id",
        type: {
          name: "String"
        }
      },
      groupName: {
        serializedName: "group_name",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      },
      deleted: {
        serializedName: "deleted",
        type: {
          name: "Boolean"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetCorpTagListRspTagGroupPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetCorpTagListRspTagGroupPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetCorpTagListRspTagGroupPropertiesItemsItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      },
      deleted: {
        serializedName: "deleted",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AddCorpTagReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCorpTagReq",
    modelProperties: {
      groupId: {
        serializedName: "group_id",
        type: {
          name: "String"
        }
      },
      groupName: {
        serializedName: "group_name",
        type: {
          name: "String"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AddCorpTagReqTagItem"
            }
          }
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddCorpTagReqTagItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCorpTagReqTagItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddCorpTagRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCorpTagRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      tagGroup: {
        serializedName: "tag_group",
        type: {
          name: "Composite",
          className: "AddCorpTagRspTagGroup"
        }
      }
    }
  }
};

export const AddCorpTagRspTagGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCorpTagRspTagGroup",
    modelProperties: {
      groupId: {
        serializedName: "group_id",
        type: {
          name: "String"
        }
      },
      groupName: {
        serializedName: "group_name",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AddCorpTagRspTagGroupTagItem"
            }
          }
        }
      }
    }
  }
};

export const AddCorpTagRspTagGroupTagItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCorpTagRspTagGroupTagItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      cretateTime: {
        serializedName: "cretate_time",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EditCorpTagReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EditCorpTagReq",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "String"
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DelCorpTagReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DelCorpTagReq",
    modelProperties: {
      tagId: {
        serializedName: "tag_id",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      groupId: {
        serializedName: "group_id",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MarkCorpContactTagReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MarkCorpContactTagReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      addTag: {
        serializedName: "add_tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      removeTag: {
        serializedName: "remove_tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const TransferCustomerReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TransferCustomerReq",
    modelProperties: {
      handoverUserid: {
        serializedName: "handover_userid",
        type: {
          name: "String"
        }
      },
      takeoverUserid: {
        serializedName: "takeover_userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      transferSuccessMsg: {
        serializedName: "transfer_success_msg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TransferCustomerRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TransferCustomerRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      customer: {
        serializedName: "customer",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TransferCustomerRspCustomerItem"
            }
          }
        }
      }
    }
  }
};

export const TransferCustomerRspCustomerItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TransferCustomerRspCustomerItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetTransferResultReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTransferResultReq",
    modelProperties: {
      handoverUserid: {
        serializedName: "handover_userid",
        type: {
          name: "String"
        }
      },
      takeoverUserid: {
        serializedName: "takeover_userid",
        type: {
          name: "String"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetTransferResultRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTransferResultRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      customer: {
        serializedName: "customer",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetTransferResultRspCustomerItem"
            }
          }
        }
      }
    }
  }
};

export const GetTransferResultRspCustomerItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTransferResultRspCustomerItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      takeoverTime: {
        serializedName: "takeover_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetUnassignedListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUnassignedListReq",
    modelProperties: {
      pageId: {
        serializedName: "page_id",
        type: {
          name: "Number"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      pageSize: {
        serializedName: "page_size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetUnassignedListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUnassignedListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      isLast: {
        serializedName: "is_last",
        type: {
          name: "Boolean"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetUnassignedListRspInfoItem"
            }
          }
        }
      }
    }
  }
};

export const GetUnassignedListRspInfoItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUnassignedListRspInfoItem",
    modelProperties: {
      handoverUserid: {
        serializedName: "handover_userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      dimissionTime: {
        serializedName: "dimission_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResignedTransferCustomerReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResignedTransferCustomerReq",
    modelProperties: {
      handoverUserid: {
        serializedName: "handover_userid",
        type: {
          name: "String"
        }
      },
      takeoverUserid: {
        serializedName: "takeover_userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResignedTransferCustomerRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResignedTransferCustomerRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      customer: {
        serializedName: "customer",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResignedTransferCustomerRspCustomerItem"
            }
          }
        }
      }
    }
  }
};

export const ResignedTransferCustomerRspCustomerItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResignedTransferCustomerRspCustomerItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResignedTransferResultReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResignedTransferResultReq",
    modelProperties: {
      handoverUserid: {
        serializedName: "handover_userid",
        type: {
          name: "String"
        }
      },
      takeoverUserid: {
        serializedName: "takeover_userid",
        type: {
          name: "String"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResignedTransferResultRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResignedTransferResultRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      customer: {
        serializedName: "customer",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResignedTransferResultRspCustomerItem"
            }
          }
        }
      }
    }
  }
};

export const ResignedTransferResultRspCustomerItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResignedTransferResultRspCustomerItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      takeoverTime: {
        serializedName: "takeover_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GroupchatTransferReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatTransferReq",
    modelProperties: {
      chatIdList: {
        serializedName: "chat_id_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      newOwner: {
        serializedName: "new_owner",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupchatTransferRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatTransferRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      failedChatList: {
        serializedName: "failed_chat_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GroupchatTransferRspFailedChatListItem"
            }
          }
        }
      }
    }
  }
};

export const GroupchatTransferRspFailedChatListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatTransferRspFailedChatListItem",
    modelProperties: {
      chatId: {
        serializedName: "chat_id",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupchatListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatListReq",
    modelProperties: {
      statusFilter: {
        serializedName: "status_filter",
        type: {
          name: "Number"
        }
      },
      ownerFilter: {
        serializedName: "owner_filter",
        type: {
          name: "Composite",
          className: "GroupchatListReqOwnerFilter"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GroupchatListReqOwnerFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatListReqOwnerFilter",
    modelProperties: {
      useridList: {
        serializedName: "userid_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GroupchatListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      groupChatList: {
        serializedName: "group_chat_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GroupchatListRspGroupChatListItem"
            }
          }
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupchatListRspGroupChatListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupchatListRspGroupChatListItem",
    modelProperties: {
      chatId: {
        serializedName: "chat_id",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetGroupchatReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatReq",
    modelProperties: {
      chatId: {
        serializedName: "chat_id",
        type: {
          name: "String"
        }
      },
      needName: {
        serializedName: "need_name",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetGroupchatRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      groupChat: {
        serializedName: "group_chat",
        type: {
          name: "Composite",
          className: "GetGroupchatRspGroupChat"
        }
      }
    }
  }
};

export const GetGroupchatRspGroupChat: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatRspGroupChat",
    modelProperties: {
      chatId: {
        serializedName: "chat_id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      notice: {
        serializedName: "notice",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      },
      memberList: {
        serializedName: "member_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupchatRspGroupChatMemberListItem"
            }
          }
        }
      },
      adminList: {
        serializedName: "admin_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupchatRspGroupChatAdminListItem"
            }
          }
        }
      }
    }
  }
};

export const GetGroupchatRspGroupChatMemberListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatRspGroupChatMemberListItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      joinTime: {
        serializedName: "join_time",
        type: {
          name: "Number"
        }
      },
      joinScene: {
        serializedName: "join_scene",
        type: {
          name: "Number"
        }
      },
      invitor: {
        serializedName: "invitor",
        type: {
          name: "Composite",
          className: "GetGroupchatRspGroupChatMemberListItemInvitor"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      groupNickname: {
        serializedName: "group_nickname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupchatRspGroupChatMemberListItemInvitor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatRspGroupChatMemberListItemInvitor",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupchatRspGroupChatAdminListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatRspGroupChatAdminListItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConvertOpengidToChatidReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConvertOpengidToChatidReq",
    modelProperties: {
      opengid: {
        serializedName: "opengid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConvertOpengidToChatidRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConvertOpengidToChatidRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      chatId: {
        serializedName: "chat_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListReq",
    modelProperties: {
      startTime: {
        serializedName: "start_time",
        type: {
          name: "Number"
        }
      },
      endTime: {
        serializedName: "end_time",
        type: {
          name: "Number"
        }
      },
      creator: {
        serializedName: "creator",
        type: {
          name: "String"
        }
      },
      filterType: {
        serializedName: "filter_type",
        type: {
          name: "Number"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetMomentListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      momentList: {
        serializedName: "moment_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentListRspMomentListItem"
            }
          }
        }
      }
    }
  }
};

export const GetMomentListRspMomentListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRspMomentListItem",
    modelProperties: {
      momentId: {
        serializedName: "moment_id",
        type: {
          name: "String"
        }
      },
      creator: {
        serializedName: "creator",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      },
      createType: {
        serializedName: "create_type",
        type: {
          name: "Number"
        }
      },
      visibleType: {
        serializedName: "visible_type",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "GetMomentListRspMomentListItemText"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentListRspMomentListPropertiesItemsItem"
            }
          }
        }
      },
      video: {
        serializedName: "video",
        type: {
          name: "Composite",
          className: "GetMomentListRspMomentListItemVideo"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "GetMomentListRspMomentListItemLink"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "GetMomentListRspMomentListItemLocation"
        }
      }
    }
  }
};

export const GetMomentListRspMomentListItemText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRspMomentListItemText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentListRspMomentListPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRspMomentListPropertiesItemsItem",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentListRspMomentListItemVideo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRspMomentListItemVideo",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      thumbMediaId: {
        serializedName: "thumb_media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentListRspMomentListItemLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRspMomentListItemLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentListRspMomentListItemLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentListRspMomentListItemLocation",
    modelProperties: {
      latitude: {
        serializedName: "latitude",
        type: {
          name: "String"
        }
      },
      longitude: {
        serializedName: "longitude",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentTaskReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentTaskReq",
    modelProperties: {
      momentId: {
        serializedName: "moment_id",
        type: {
          name: "String"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetMomentTaskRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentTaskRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      taskList: {
        serializedName: "task_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentTaskRspTaskListItem"
            }
          }
        }
      }
    }
  }
};

export const GetMomentTaskRspTaskListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentTaskRspTaskListItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      publishStatus: {
        serializedName: "publish_status",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetMomentCustomerListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCustomerListReq",
    modelProperties: {
      momentId: {
        serializedName: "moment_id",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetMomentCustomerListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCustomerListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      customerList: {
        serializedName: "customer_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentCustomerListRspCustomerListItem"
            }
          }
        }
      }
    }
  }
};

export const GetMomentCustomerListRspCustomerListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCustomerListRspCustomerListItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentSendResultReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentSendResultReq",
    modelProperties: {
      momentId: {
        serializedName: "moment_id",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetMomentSendResultRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentSendResultRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      customerList: {
        serializedName: "customer_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentSendResultRspCustomerListItem"
            }
          }
        }
      }
    }
  }
};

export const GetMomentSendResultRspCustomerListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentSendResultRspCustomerListItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentCommentsReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCommentsReq",
    modelProperties: {
      momentId: {
        serializedName: "moment_id",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMomentCommentsRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCommentsRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      commentList: {
        serializedName: "comment_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentCommentsRspCommentListItem"
            }
          }
        }
      }
    }
  }
};

export const GetMomentCommentsRspCommentListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCommentsRspCommentListItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      },
      likeList: {
        serializedName: "like_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMomentCommentsRspCommentListPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetMomentCommentsRspCommentListPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMomentCommentsRspCommentListPropertiesItemsItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "create_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddMsgTemplateReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReq",
    modelProperties: {
      chatType: {
        serializedName: "chat_type",
        type: {
          name: "String"
        }
      },
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      sender: {
        serializedName: "sender",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "AddMsgTemplateReqText"
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AddMsgTemplateReqAttachmentsItem"
            }
          }
        }
      }
    }
  }
};

export const AddMsgTemplateReqText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReqText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddMsgTemplateReqAttachmentsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReqAttachmentsItem",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "AddMsgTemplateReqAttachmentsItemImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "AddMsgTemplateReqAttachmentsItemLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "AddMsgTemplateReqAttachmentsItemMiniprogram"
        }
      },
      video: {
        serializedName: "video",
        type: {
          name: "Composite",
          className: "AddMsgTemplateReqAttachmentsItemVideo"
        }
      }
    }
  }
};

export const AddMsgTemplateReqAttachmentsItemImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReqAttachmentsItemImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      picUrl: {
        serializedName: "pic_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddMsgTemplateReqAttachmentsItemLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReqAttachmentsItemLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddMsgTemplateReqAttachmentsItemMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReqAttachmentsItemMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddMsgTemplateReqAttachmentsItemVideo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateReqAttachmentsItemVideo",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddMsgTemplateRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddMsgTemplateRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      msgid: {
        serializedName: "msgid",
        type: {
          name: "String"
        }
      },
      failList: {
        serializedName: "fail_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetGroupmsgListV2Req: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2Req",
    modelProperties: {
      chatType: {
        serializedName: "chat_type",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "start_time",
        type: {
          name: "Number"
        }
      },
      endTime: {
        serializedName: "end_time",
        type: {
          name: "Number"
        }
      },
      creator: {
        serializedName: "creator",
        type: {
          name: "String"
        }
      },
      filterType: {
        serializedName: "filter_type",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgListV2Rsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2Rsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupmsgListV2RspAttachmentsItem"
            }
          }
        }
      }
    }
  }
};

export const GetGroupmsgListV2RspAttachmentsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2RspAttachmentsItem",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "GetGroupmsgListV2RspAttachmentsItemImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "GetGroupmsgListV2RspAttachmentsItemLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "GetGroupmsgListV2RspAttachmentsItemMiniprogram"
        }
      },
      video: {
        serializedName: "video",
        type: {
          name: "Composite",
          className: "GetGroupmsgListV2RspAttachmentsItemVideo"
        }
      }
    }
  }
};

export const GetGroupmsgListV2RspAttachmentsItemImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2RspAttachmentsItemImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      picUrl: {
        serializedName: "pic_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgListV2RspAttachmentsItemLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2RspAttachmentsItemLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgListV2RspAttachmentsItemMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2RspAttachmentsItemMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgListV2RspAttachmentsItemVideo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgListV2RspAttachmentsItemVideo",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgTaskReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgTaskReq",
    modelProperties: {
      msgid: {
        serializedName: "msgid",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgTaskRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgTaskRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      taskList: {
        serializedName: "task_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupmsgTaskRspTaskListItem"
            }
          }
        }
      }
    }
  }
};

export const GetGroupmsgTaskRspTaskListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgTaskRspTaskListItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      sendTime: {
        serializedName: "send_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetGroupmsgSendResultReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgSendResultReq",
    modelProperties: {
      msgid: {
        serializedName: "msgid",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      cursor: {
        serializedName: "cursor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetGroupmsgSendResultRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgSendResultRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      nextCursor: {
        serializedName: "next_cursor",
        type: {
          name: "String"
        }
      },
      sendList: {
        serializedName: "send_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupmsgSendResultRspSendListItem"
            }
          }
        }
      }
    }
  }
};

export const GetGroupmsgSendResultRspSendListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupmsgSendResultRspSendListItem",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      chatId: {
        serializedName: "chat_id",
        type: {
          name: "String"
        }
      },
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      sendTime: {
        serializedName: "send_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SendWelcomeMsgReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReq",
    modelProperties: {
      welcomeCode: {
        serializedName: "welcome_code",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "SendWelcomeMsgReqText"
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SendWelcomeMsgReqAttachmentsItem"
            }
          }
        }
      }
    }
  }
};

export const SendWelcomeMsgReqText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReqText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendWelcomeMsgReqAttachmentsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReqAttachmentsItem",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "SendWelcomeMsgReqAttachmentsItemImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "SendWelcomeMsgReqAttachmentsItemLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "SendWelcomeMsgReqAttachmentsItemMiniprogram"
        }
      },
      video: {
        serializedName: "video",
        type: {
          name: "Composite",
          className: "SendWelcomeMsgReqAttachmentsItemVideo"
        }
      }
    }
  }
};

export const SendWelcomeMsgReqAttachmentsItemImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReqAttachmentsItemImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      picUrl: {
        serializedName: "pic_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendWelcomeMsgReqAttachmentsItemLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReqAttachmentsItemLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendWelcomeMsgReqAttachmentsItemMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReqAttachmentsItemMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendWelcomeMsgReqAttachmentsItemVideo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgReqAttachmentsItemVideo",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendWelcomeMsgRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendWelcomeMsgRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddGroupWelcomeTemplateReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddGroupWelcomeTemplateReq",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "AddGroupWelcomeTemplateReqText"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "AddGroupWelcomeTemplateReqImage"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "AddGroupWelcomeTemplateReqLink"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "AddGroupWelcomeTemplateReqMiniprogram"
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      notify: {
        serializedName: "notify",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddGroupWelcomeTemplateReqText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddGroupWelcomeTemplateReqText",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddGroupWelcomeTemplateReqImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddGroupWelcomeTemplateReqImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      picUrl: {
        serializedName: "pic_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddGroupWelcomeTemplateReqLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddGroupWelcomeTemplateReqLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddGroupWelcomeTemplateReqMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddGroupWelcomeTemplateReqMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddGroupWelcomeTemplateRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddGroupWelcomeTemplateRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      templateId: {
        serializedName: "template_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetUserBehaviorDataReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUserBehaviorDataReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      partyid: {
        serializedName: "partyid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      startTime: {
        serializedName: "start_time",
        type: {
          name: "Number"
        }
      },
      endTime: {
        serializedName: "end_time",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetUserBehaviorDataRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUserBehaviorDataRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      behaviorData: {
        serializedName: "behavior_data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetUserBehaviorDataRspBehaviorDataItem"
            }
          }
        }
      }
    }
  }
};

export const GetUserBehaviorDataRspBehaviorDataItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetUserBehaviorDataRspBehaviorDataItem",
    modelProperties: {
      statTime: {
        serializedName: "stat_time",
        type: {
          name: "Number"
        }
      },
      chatCnt: {
        serializedName: "chat_cnt",
        type: {
          name: "Number"
        }
      },
      messageCnt: {
        serializedName: "message_cnt",
        type: {
          name: "Number"
        }
      },
      replyPercentage: {
        serializedName: "reply_percentage",
        type: {
          name: "Number"
        }
      },
      avgReplyTime: {
        serializedName: "avg_reply_time",
        type: {
          name: "Number"
        }
      },
      negativeFeedbackCnt: {
        serializedName: "negative_feedback_cnt",
        type: {
          name: "Number"
        }
      },
      newApplyCnt: {
        serializedName: "new_apply_cnt",
        type: {
          name: "Number"
        }
      },
      newContactCnt: {
        serializedName: "new_contact_cnt",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetGroupchatStatisticReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticReq",
    modelProperties: {
      dayBeginTime: {
        serializedName: "day_begin_time",
        type: {
          name: "Number"
        }
      },
      dayEndTime: {
        serializedName: "day_end_time",
        type: {
          name: "Number"
        }
      },
      ownerFilter: {
        serializedName: "owner_filter",
        type: {
          name: "Composite",
          className: "GetGroupchatStatisticReqOwnerFilter"
        }
      },
      orderBy: {
        serializedName: "order_by",
        type: {
          name: "Number"
        }
      },
      orderAsc: {
        serializedName: "order_asc",
        type: {
          name: "Number"
        }
      },
      offset: {
        serializedName: "offset",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetGroupchatStatisticReqOwnerFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticReqOwnerFilter",
    modelProperties: {
      useridList: {
        serializedName: "userid_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetGroupchatStatisticRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      total: {
        serializedName: "total",
        type: {
          name: "Number"
        }
      },
      nextOffset: {
        serializedName: "next_offset",
        type: {
          name: "Number"
        }
      },
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupchatStatisticRspItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetGroupchatStatisticRspItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticRspItemsItem",
    modelProperties: {
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetGroupchatStatisticRspItemsPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetGroupchatStatisticRspItemsPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticRspItemsPropertiesItemsItem",
    modelProperties: {
      newChatCnt: {
        serializedName: "new_chat_cnt",
        type: {
          name: "Number"
        }
      },
      chatTotal: {
        serializedName: "chat_total",
        type: {
          name: "Number"
        }
      },
      chatHasMsg: {
        serializedName: "chat_has_msg",
        type: {
          name: "Number"
        }
      },
      newMemberCnt: {
        serializedName: "new_member_cnt",
        type: {
          name: "Number"
        }
      },
      memberTotal: {
        serializedName: "member_total",
        type: {
          name: "Number"
        }
      },
      memberHasMsg: {
        serializedName: "member_has_msg",
        type: {
          name: "Number"
        }
      },
      msgTotal: {
        serializedName: "msg_total",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetGroupchatStatisticGroupByDayReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticGroupByDayReq",
    modelProperties: {
      dayBeginTime: {
        serializedName: "day_begin_time",
        type: {
          name: "Number"
        }
      },
      dayEndTime: {
        serializedName: "day_end_time",
        type: {
          name: "Number"
        }
      },
      ownerFilter: {
        serializedName: "owner_filter",
        type: {
          name: "Composite",
          className: "GetGroupchatStatisticGroupByDayReqOwnerFilter"
        }
      }
    }
  }
};

export const GetGroupchatStatisticGroupByDayReqOwnerFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticGroupByDayReqOwnerFilter",
    modelProperties: {
      useridList: {
        serializedName: "userid_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetGroupchatStatisticGroupByDayRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticGroupByDayRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      items: {
        serializedName: "items",
        type: {
          name: "Composite",
          className: "GetGroupchatStatisticGroupByDayRspItems"
        }
      }
    }
  }
};

export const GetGroupchatStatisticGroupByDayRspItems: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticGroupByDayRspItems",
    modelProperties: {
      statTime: {
        serializedName: "stat_time",
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "GetGroupchatStatisticGroupByDayRspItemData"
        }
      }
    }
  }
};

export const GetGroupchatStatisticGroupByDayRspItemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetGroupchatStatisticGroupByDayRspItemData",
    modelProperties: {
      newChatCnt: {
        serializedName: "new_chat_cnt",
        type: {
          name: "Number"
        }
      },
      chatTotal: {
        serializedName: "chat_total",
        type: {
          name: "Number"
        }
      },
      chatHasMsg: {
        serializedName: "chat_has_msg",
        type: {
          name: "Number"
        }
      },
      newMemberCnt: {
        serializedName: "new_member_cnt",
        type: {
          name: "Number"
        }
      },
      memberTotal: {
        serializedName: "member_total",
        type: {
          name: "Number"
        }
      },
      memberHasMsg: {
        serializedName: "member_has_msg",
        type: {
          name: "Number"
        }
      },
      msgTotal: {
        serializedName: "msg_total",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MediaUploadRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaUploadRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "created_at",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaUploadImgRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaUploadImgRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateAppchatReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAppchatReq",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      chatid: {
        serializedName: "chatid",
        type: {
          name: "String"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateAppchatRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAppchatRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      chatid: {
        serializedName: "chatid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateAppchatReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateAppchatReq",
    modelProperties: {
      chatid: {
        serializedName: "chatid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      addUserList: {
        serializedName: "add_user_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      delUserList: {
        serializedName: "del_user_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetAppchatReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAppchatReq",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      chatInfo: {
        serializedName: "chat_info",
        type: {
          name: "Composite",
          className: "GetAppchatReqChatInfo"
        }
      }
    }
  }
};

export const GetAppchatReqChatInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAppchatReqChatInfo",
    modelProperties: {
      chatid: {
        serializedName: "chatid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateDepartmentReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDepartmentReq",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nameEn: {
        serializedName: "name_en",
        type: {
          name: "String"
        }
      },
      parentid: {
        serializedName: "parentid",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CreateDepartmentRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDepartmentRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UpdateDepartmentReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateDepartmentReq",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nameEn: {
        serializedName: "name_en",
        type: {
          name: "String"
        }
      },
      parentid: {
        serializedName: "parentid",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetDepartmentListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetDepartmentListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetDepartmentListRspDepartmentItem"
            }
          }
        }
      }
    }
  }
};

export const GetDepartmentListRspDepartmentItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetDepartmentListRspDepartmentItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nameEn: {
        serializedName: "name_en",
        type: {
          name: "String"
        }
      },
      parentid: {
        serializedName: "parentid",
        type: {
          name: "Number"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetAgentPermListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentPermListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      userids: {
        serializedName: "userids",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      departmentIds: {
        serializedName: "department_ids",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const GetLinkedcorpUserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserReq",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpUserRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      userInfo: {
        serializedName: "user_info",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserRspUserInfo"
        }
      }
    }
  }
};

export const GetLinkedcorpUserRspUserInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserRspUserInfo",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      mobile: {
        serializedName: "mobile",
        type: {
          name: "String"
        }
      },
      telephone: {
        serializedName: "telephone",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      extattr: {
        serializedName: "extattr",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserRspUserInfoExtattr"
        }
      }
    }
  }
};

export const GetLinkedcorpUserRspUserInfoExtattr: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserRspUserInfoExtattr",
    modelProperties: {
      attrs: {
        serializedName: "attrs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetLinkedcorpUserRspUserInfoExtattrAttrsItem"
            }
          }
        }
      }
    }
  }
};

export const GetLinkedcorpUserRspUserInfoExtattrAttrsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserRspUserInfoExtattrAttrsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserRspUserInfoExtattrAttrsItemText"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserRspUserInfoExtattrAttrsItemWeb"
        }
      }
    }
  }
};

export const GetLinkedcorpUserRspUserInfoExtattrAttrsItemText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserRspUserInfoExtattrAttrsItemText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpUserRspUserInfoExtattrAttrsItemWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserRspUserInfoExtattrAttrsItemWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpUserSimplelistReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserSimplelistReq",
    modelProperties: {
      departmentId: {
        serializedName: "department_id",
        type: {
          name: "String"
        }
      },
      fetchChild: {
        serializedName: "fetch_child",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const GetLinkedcorpUserSimplelistRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserSimplelistRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserSimplelistRspUserlist"
        }
      }
    }
  }
};

export const GetLinkedcorpUserSimplelistRspUserlist: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserSimplelistRspUserlist",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpUserListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListReq",
    modelProperties: {
      departmentId: {
        serializedName: "department_id",
        type: {
          name: "String"
        }
      },
      fetchChild: {
        serializedName: "fetch_child",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const GetLinkedcorpUserListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      userlist: {
        serializedName: "userlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetLinkedcorpUserListRspUserlistItem"
            }
          }
        }
      }
    }
  }
};

export const GetLinkedcorpUserListRspUserlistItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListRspUserlistItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      mobile: {
        serializedName: "mobile",
        type: {
          name: "String"
        }
      },
      telephone: {
        serializedName: "telephone",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      department: {
        serializedName: "department",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extattr: {
        serializedName: "extattr",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserListRspUserlistItemExtattr"
        }
      }
    }
  }
};

export const GetLinkedcorpUserListRspUserlistItemExtattr: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListRspUserlistItemExtattr",
    modelProperties: {
      attrs: {
        serializedName: "attrs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetLinkedcorpUserListRspUserlistPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetLinkedcorpUserListRspUserlistPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListRspUserlistPropertiesItemsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemText"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className: "GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemWeb"
        }
      }
    }
  }
};

export const GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpUserListRspUserlistItemExtattrAttrsItemWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpDepartmentListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpDepartmentListReq",
    modelProperties: {
      departmentId: {
        serializedName: "department_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetLinkedcorpDepartmentListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpDepartmentListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      departmentList: {
        serializedName: "department_list",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetLinkedcorpDepartmentListRspDepartmentListItem"
            }
          }
        }
      }
    }
  }
};

export const GetLinkedcorpDepartmentListRspDepartmentListItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetLinkedcorpDepartmentListRspDepartmentListItem",
    modelProperties: {
      departmentId: {
        serializedName: "department_id",
        type: {
          name: "Number"
        }
      },
      departmentName: {
        serializedName: "department_name",
        type: {
          name: "String"
        }
      },
      parentid: {
        serializedName: "parentid",
        type: {
          name: "String"
        }
      },
      order: {
        serializedName: "order",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BatchSyncuserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchSyncuserReq",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      toInvite: {
        serializedName: "to_invite",
        type: {
          name: "Boolean"
        }
      },
      callback: {
        serializedName: "callback",
        type: {
          name: "Composite",
          className: "BatchSyncuserReqCallback"
        }
      }
    }
  }
};

export const BatchSyncuserReqCallback: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchSyncuserReqCallback",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      token: {
        serializedName: "token",
        type: {
          name: "String"
        }
      },
      encodingaeskey: {
        serializedName: "encodingaeskey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchSyncuserRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchSyncuserRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      jonid: {
        serializedName: "jonid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchReplaceuserReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchReplaceuserReq",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      toInvite: {
        serializedName: "to_invite",
        type: {
          name: "Boolean"
        }
      },
      callback: {
        serializedName: "callback",
        type: {
          name: "Composite",
          className: "BatchReplaceuserReqCallback"
        }
      }
    }
  }
};

export const BatchReplaceuserReqCallback: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchReplaceuserReqCallback",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      token: {
        serializedName: "token",
        type: {
          name: "String"
        }
      },
      encodingaeskey: {
        serializedName: "encodingaeskey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchReplaceuserRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchReplaceuserRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      jobid: {
        serializedName: "jobid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchReplacepartyReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchReplacepartyReq",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      toInvite: {
        serializedName: "to_invite",
        type: {
          name: "Boolean"
        }
      },
      callback: {
        serializedName: "callback",
        type: {
          name: "Composite",
          className: "BatchReplacepartyReqCallback"
        }
      }
    }
  }
};

export const BatchReplacepartyReqCallback: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchReplacepartyReqCallback",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      token: {
        serializedName: "token",
        type: {
          name: "String"
        }
      },
      encodingaeskey: {
        serializedName: "encodingaeskey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchReplacepartyRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchReplacepartyRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      jobid: {
        serializedName: "jobid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchGetresultRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchGetresultRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      total: {
        serializedName: "total",
        type: {
          name: "Number"
        }
      },
      percentage: {
        serializedName: "percentage",
        type: {
          name: "Number"
        }
      },
      result: {
        serializedName: "result",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchGetresultRspResultItem"
            }
          }
        }
      }
    }
  }
};

export const BatchGetresultRspResultItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchGetresultRspResultItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "Number"
        }
      },
      partyid: {
        serializedName: "partyid",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetServiceProviderTokenReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceProviderTokenReq",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      providerSecret: {
        serializedName: "provider_secret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceProviderTokenRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceProviderTokenRsp",
    modelProperties: {
      providerAccessToken: {
        serializedName: "provider_access_token",
        type: {
          name: "String"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetServiceSuiteTokenReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceSuiteTokenReq",
    modelProperties: {
      suiteId: {
        serializedName: "suite_id",
        type: {
          name: "String"
        }
      },
      suiteSecret: {
        serializedName: "suite_secret",
        type: {
          name: "String"
        }
      },
      suiteTicket: {
        serializedName: "suite_ticket",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceSuiteTokenRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceSuiteTokenRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      suiteAccessToken: {
        serializedName: "suite_access_token",
        type: {
          name: "String"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetServicePreAuthCodeRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePreAuthCodeRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      preAuthCode: {
        serializedName: "pre_auth_code",
        type: {
          name: "String"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SetServiceSessionInfoReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SetServiceSessionInfoReq",
    modelProperties: {
      preAuthCode: {
        serializedName: "pre_auth_code",
        type: {
          name: "String"
        }
      },
      sessionInfo: {
        serializedName: "session_info",
        type: {
          name: "Composite",
          className: "SetServiceSessionInfoReqSessionInfo"
        }
      }
    }
  }
};

export const SetServiceSessionInfoReqSessionInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SetServiceSessionInfoReqSessionInfo",
    modelProperties: {
      appid: {
        serializedName: "appid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      authType: {
        serializedName: "auth_type",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetServicePermanentCodeReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeReq",
    modelProperties: {
      authCode: {
        serializedName: "auth_code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      accessToken: {
        serializedName: "access_token",
        type: {
          name: "String"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      },
      permanentCode: {
        serializedName: "permanent_code",
        type: {
          name: "String"
        }
      },
      dealerCorpInfo: {
        serializedName: "dealer_corp_info",
        type: {
          name: "Composite",
          className: "GetServicePermanentCodeRspDealerCorpInfo"
        }
      },
      authCorpInfo: {
        serializedName: "auth_corp_info",
        type: {
          name: "Composite",
          className: "GetServicePermanentCodeRspAuthCorpInfo"
        }
      },
      authInfo: {
        serializedName: "auth_info",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetServicePermanentCodeRspAuthInfoItem"
            }
          }
        }
      },
      authUserInfo: {
        serializedName: "auth_user_info",
        type: {
          name: "Composite",
          className: "GetServicePermanentCodeRspAuthUserInfo"
        }
      },
      registerCodeInfo: {
        serializedName: "register_code_info",
        type: {
          name: "Composite",
          className: "GetServicePermanentCodeRspRegisterCodeInfo"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspDealerCorpInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspDealerCorpInfo",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspAuthCorpInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspAuthCorpInfo",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      },
      corpType: {
        serializedName: "corp_type",
        type: {
          name: "String"
        }
      },
      corpSquareLogoUrl: {
        serializedName: "corp_square_logo_url",
        type: {
          name: "String"
        }
      },
      corpUserMax: {
        serializedName: "corp_user_max",
        type: {
          name: "Number"
        }
      },
      corpAgentMax: {
        serializedName: "corp_agent_max",
        type: {
          name: "Number"
        }
      },
      corpFullName: {
        serializedName: "corp_full_name",
        type: {
          name: "String"
        }
      },
      verifiedEndTime: {
        serializedName: "verified_end_time",
        type: {
          name: "Number"
        }
      },
      subjectType: {
        serializedName: "subject_type",
        type: {
          name: "Number"
        }
      },
      corpWxqrcode: {
        serializedName: "corp_wxqrcode",
        type: {
          name: "String"
        }
      },
      corpScale: {
        serializedName: "corp_scale",
        type: {
          name: "String"
        }
      },
      corpIndustry: {
        serializedName: "corp_industry",
        type: {
          name: "String"
        }
      },
      corpSubIndustry: {
        serializedName: "corp_sub_industry",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspAuthInfoItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspAuthInfoItem",
    modelProperties: {
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      roundLogoUrl: {
        serializedName: "round_logo_url",
        type: {
          name: "String"
        }
      },
      squareLogoUrl: {
        serializedName: "square_logo_url",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "Number"
        }
      },
      authMode: {
        serializedName: "auth_mode",
        type: {
          name: "Number"
        }
      },
      privilege: {
        serializedName: "privilege",
        type: {
          name: "Composite",
          className: "GetServicePermanentCodeRspAuthInfoItemPrivilege"
        }
      },
      sharedFrom: {
        serializedName: "shared_from",
        type: {
          name: "Composite",
          className: "GetServicePermanentCodeRspAuthInfoItemSharedFrom"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspAuthInfoItemPrivilege: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspAuthInfoItemPrivilege",
    modelProperties: {
      level: {
        serializedName: "level",
        type: {
          name: "Number"
        }
      },
      allowParty: {
        serializedName: "allow_party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      allowUser: {
        serializedName: "allow_user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      allowTag: {
        serializedName: "allow_tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      extraParty: {
        serializedName: "extra_party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      extraUser: {
        serializedName: "extra_user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extraTag: {
        serializedName: "extra_tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspAuthInfoItemSharedFrom: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspAuthInfoItemSharedFrom",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspAuthUserInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspAuthUserInfo",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      openUserid: {
        serializedName: "open_userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServicePermanentCodeRspRegisterCodeInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePermanentCodeRspRegisterCodeInfo",
    modelProperties: {
      registerCode: {
        serializedName: "register_code",
        type: {
          name: "String"
        }
      },
      templateId: {
        serializedName: "template_id",
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceAuthInfoReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoReq",
    modelProperties: {
      authCorpid: {
        serializedName: "auth_corpid",
        type: {
          name: "String"
        }
      },
      permanentCode: {
        serializedName: "permanent_code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceAuthInfoRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      },
      permanentCode: {
        serializedName: "permanent_code",
        type: {
          name: "String"
        }
      },
      dealerCorpInfo: {
        serializedName: "dealer_corp_info",
        type: {
          name: "Composite",
          className: "GetServiceAuthInfoRspDealerCorpInfo"
        }
      },
      authInfo: {
        serializedName: "auth_info",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetServiceAuthInfoRspAuthInfoItem"
            }
          }
        }
      }
    }
  }
};

export const GetServiceAuthInfoRspDealerCorpInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoRspDealerCorpInfo",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      },
      authCorpInfo: {
        serializedName: "auth_corp_info",
        type: {
          name: "Composite",
          className: "GetServiceAuthInfoRspDealerCorpInfoAuthCorpInfo"
        }
      }
    }
  }
};

export const GetServiceAuthInfoRspDealerCorpInfoAuthCorpInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoRspDealerCorpInfoAuthCorpInfo",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      },
      corpType: {
        serializedName: "corp_type",
        type: {
          name: "String"
        }
      },
      corpSquareLogoUrl: {
        serializedName: "corp_square_logo_url",
        type: {
          name: "String"
        }
      },
      corpUserMax: {
        serializedName: "corp_user_max",
        type: {
          name: "Number"
        }
      },
      corpAgentMax: {
        serializedName: "corp_agent_max",
        type: {
          name: "Number"
        }
      },
      corpFullName: {
        serializedName: "corp_full_name",
        type: {
          name: "String"
        }
      },
      verifiedEndTime: {
        serializedName: "verified_end_time",
        type: {
          name: "Number"
        }
      },
      subjectType: {
        serializedName: "subject_type",
        type: {
          name: "Number"
        }
      },
      corpWxqrcode: {
        serializedName: "corp_wxqrcode",
        type: {
          name: "String"
        }
      },
      corpScale: {
        serializedName: "corp_scale",
        type: {
          name: "String"
        }
      },
      corpIndustry: {
        serializedName: "corp_industry",
        type: {
          name: "String"
        }
      },
      corpSubIndustry: {
        serializedName: "corp_sub_industry",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceAuthInfoRspAuthInfoItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoRspAuthInfoItem",
    modelProperties: {
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      roundLogoUrl: {
        serializedName: "round_logo_url",
        type: {
          name: "String"
        }
      },
      squareLogoUrl: {
        serializedName: "square_logo_url",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "Number"
        }
      },
      authMode: {
        serializedName: "auth_mode",
        type: {
          name: "Number"
        }
      },
      privilege: {
        serializedName: "privilege",
        type: {
          name: "Composite",
          className: "GetServiceAuthInfoRspAuthInfoItemPrivilege"
        }
      },
      sharedFrom: {
        serializedName: "shared_from",
        type: {
          name: "Composite",
          className: "GetServiceAuthInfoRspAuthInfoItemSharedFrom"
        }
      }
    }
  }
};

export const GetServiceAuthInfoRspAuthInfoItemPrivilege: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoRspAuthInfoItemPrivilege",
    modelProperties: {
      level: {
        serializedName: "level",
        type: {
          name: "Number"
        }
      },
      allowParty: {
        serializedName: "allow_party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      allowUser: {
        serializedName: "allow_user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      allowTag: {
        serializedName: "allow_tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      extraParty: {
        serializedName: "extra_party",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      extraUser: {
        serializedName: "extra_user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extraTag: {
        serializedName: "extra_tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GetServiceAuthInfoRspAuthInfoItemSharedFrom: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAuthInfoRspAuthInfoItemSharedFrom",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceCorpTokenReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceCorpTokenReq",
    modelProperties: {
      authCorpid: {
        serializedName: "auth_corpid",
        type: {
          name: "String"
        }
      },
      permanentCode: {
        serializedName: "permanent_code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServiceCorpTokenRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceCorpTokenRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      accessToken: {
        serializedName: "access_token",
        type: {
          name: "String"
        }
      },
      expiresIn: {
        serializedName: "expires_in",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetServiceAdminListReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAdminListReq",
    modelProperties: {
      authCorpid: {
        serializedName: "auth_corpid",
        type: {
          name: "String"
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetServiceAdminListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAdminListRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      admin: {
        serializedName: "admin",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetServiceAdminListRspAdminItem"
            }
          }
        }
      }
    }
  }
};

export const GetServiceAdminListRspAdminItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServiceAdminListRspAdminItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      openUserid: {
        serializedName: "open_userid",
        type: {
          name: "String"
        }
      },
      authType: {
        serializedName: "auth_type",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetAgentRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      squareLogoUrl: {
        serializedName: "square_logo_url",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      close: {
        serializedName: "close",
        type: {
          name: "Number"
        }
      },
      redirectDomain: {
        serializedName: "redirect_domain",
        type: {
          name: "String"
        }
      },
      reportLocationFlag: {
        serializedName: "report_location_flag",
        type: {
          name: "Number"
        }
      },
      isreportenter: {
        serializedName: "isreportenter",
        type: {
          name: "Number"
        }
      },
      homeUrl: {
        serializedName: "home_url",
        type: {
          name: "String"
        }
      },
      allowUserinfos: {
        serializedName: "allow_userinfos",
        type: {
          name: "Composite",
          className: "GetAgentRspAllowUserinfos"
        }
      },
      allowPartys: {
        serializedName: "allow_partys",
        type: {
          name: "Composite",
          className: "GetAgentRspAllowPartys"
        }
      },
      allowTags: {
        serializedName: "allow_tags",
        type: {
          name: "Composite",
          className: "GetAgentRspAllowTags"
        }
      }
    }
  }
};

export const GetAgentRspAllowUserinfos: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentRspAllowUserinfos",
    modelProperties: {
      user: {
        serializedName: "user",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetAgentRspAllowUserinfosUserItem"
            }
          }
        }
      }
    }
  }
};

export const GetAgentRspAllowUserinfosUserItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentRspAllowUserinfosUserItem",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetAgentRspAllowPartys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentRspAllowPartys",
    modelProperties: {
      partyid: {
        serializedName: "partyid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GetAgentRspAllowTags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentRspAllowTags",
    modelProperties: {
      tagid: {
        serializedName: "tagid",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const GetAgentListRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentListRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      agentlist: {
        serializedName: "agentlist",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetAgentListRspAgentlistItem"
            }
          }
        }
      }
    }
  }
};

export const GetAgentListRspAgentlistItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetAgentListRspAgentlistItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      squareLogoUrl: {
        serializedName: "square_logo_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SetAgentReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SetAgentReq",
    modelProperties: {
      agentid: {
        serializedName: "agentid",
        type: {
          name: "Number"
        }
      },
      reportLocationFlag: {
        serializedName: "report_location_flag",
        type: {
          name: "Number"
        }
      },
      logoMediaid: {
        serializedName: "logo_mediaid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      redirectDomain: {
        serializedName: "redirect_domain",
        type: {
          name: "String"
        }
      },
      isreportenter: {
        serializedName: "isreportenter",
        type: {
          name: "Number"
        }
      },
      homeUrl: {
        serializedName: "home_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SetAgentRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SetAgentRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateMenuReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateMenuReq",
    modelProperties: {
      button: {
        serializedName: "button",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CreateMenuReqButtonItem"
            }
          }
        }
      }
    }
  }
};

export const CreateMenuReqButtonItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateMenuReqButtonItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      subButton: {
        serializedName: "sub_button",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CreateMenuReqButtonPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const CreateMenuReqButtonPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateMenuReqButtonPropertiesItemsItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      pagepath: {
        serializedName: "pagepath",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateMenuRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateMenuRsp",
    modelProperties: {
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetMenuRsp: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMenuRsp",
    modelProperties: {
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      button: {
        serializedName: "button",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMenuRspButtonItem"
            }
          }
        }
      }
    }
  }
};

export const GetMenuRspButtonItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMenuRspButtonItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      subButton: {
        serializedName: "sub_button",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetMenuRspButtonPropertiesItemsItem"
            }
          }
        }
      }
    }
  }
};

export const GetMenuRspButtonPropertiesItemsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetMenuRspButtonPropertiesItemsItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      pagepath: {
        serializedName: "pagepath",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetServicePreAuthCodeReq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetServicePreAuthCodeReq",
    modelProperties: {
      corpid: {
        serializedName: "corpid",
        type: {
          name: "String"
        }
      },
      providerSecret: {
        serializedName: "provider_secret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchGetresultUser: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchGetresultUser",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchGetresultParty: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchGetresultParty",
    modelProperties: {
      action: {
        serializedName: "action",
        type: {
          name: "Number"
        }
      },
      partyid: {
        serializedName: "partyid",
        type: {
          name: "Number"
        }
      },
      errcode: {
        serializedName: "errcode",
        type: {
          name: "Number"
        }
      },
      errmsg: {
        serializedName: "errmsg",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedcorpUserInfoAttrText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedcorpUserInfoAttrText",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "LinkedcorpUserInfoAttrTextText"
        }
      }
    }
  }
};

export const LinkedcorpUserInfoAttrTextText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedcorpUserInfoAttrTextText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedcorpUserInfoAttrWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedcorpUserInfoAttrWeb",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className: "LinkedcorpUserInfoAttrWebWeb"
        }
      }
    }
  }
};

export const LinkedcorpUserInfoAttrWebWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedcorpUserInfoAttrWebWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupMsgImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgImage",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "GroupMsgImageImage"
        }
      }
    }
  }
};

export const GroupMsgImageImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgImageImage",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      },
      picUrl: {
        serializedName: "pic_url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupMsgLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgLink",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      link: {
        serializedName: "link",
        type: {
          name: "Composite",
          className: "GroupMsgLinkLink"
        }
      }
    }
  }
};

export const GroupMsgLinkLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgLinkLink",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picurl: {
        serializedName: "picurl",
        type: {
          name: "String"
        }
      },
      desc: {
        serializedName: "desc",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupMsgMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgMiniprogram",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "GroupMsgMiniprogramMiniprogram"
        }
      }
    }
  }
};

export const GroupMsgMiniprogramMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgMiniprogramMiniprogram",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      picMediaId: {
        serializedName: "pic_media_id",
        type: {
          name: "String"
        }
      },
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      page: {
        serializedName: "page",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupMsgVideo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgVideo",
    modelProperties: {
      msgtype: {
        serializedName: "msgtype",
        type: {
          name: "String"
        }
      },
      video: {
        serializedName: "video",
        type: {
          name: "Composite",
          className: "GroupMsgVideoVideo"
        }
      }
    }
  }
};

export const GroupMsgVideoVideo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupMsgVideoVideo",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchUserFollowInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchUserFollowInfo",
    modelProperties: {
      followInfo: {
        serializedName: "follow_info",
        type: {
          name: "Composite",
          className: "BatchUserFollowInfoFollowInfo"
        }
      }
    }
  }
};

export const BatchUserFollowInfoFollowInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchUserFollowInfoFollowInfo",
    modelProperties: {
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createtime: {
        serializedName: "createtime",
        type: {
          name: "Number"
        }
      },
      tagId: {
        serializedName: "tag_id",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      remarkCorpName: {
        serializedName: "remark_corp_name",
        type: {
          name: "String"
        }
      },
      remarkMobiles: {
        serializedName: "remark_mobiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      operUserid: {
        serializedName: "oper_userid",
        type: {
          name: "String"
        }
      },
      addWay: {
        serializedName: "add_way",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProfileMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileMiniprogram",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "ProfileMiniprogramMiniprogram"
        }
      }
    }
  }
};

export const ProfileMiniprogramMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileMiniprogramMiniprogram",
    modelProperties: {
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      pagepath: {
        serializedName: "pagepath",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExternalContact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContact",
    modelProperties: {
      externalContact: {
        serializedName: "external_contact",
        type: {
          name: "Composite",
          className: "ExternalContactExternalContact"
        }
      }
    }
  }
};

export const ExternalContactExternalContact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContactExternalContact",
    modelProperties: {
      externalUserid: {
        serializedName: "external_userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      position: {
        serializedName: "position",
        type: {
          name: "String"
        }
      },
      avatar: {
        serializedName: "avatar",
        type: {
          name: "String"
        }
      },
      corpName: {
        serializedName: "corp_name",
        type: {
          name: "String"
        }
      },
      corpFullName: {
        serializedName: "corp_full_name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Number"
        }
      },
      unionid: {
        serializedName: "unionid",
        type: {
          name: "String"
        }
      },
      externalProfile: {
        serializedName: "external_profile",
        type: {
          name: "Composite",
          className: "ExternalContactExternalProfile"
        }
      }
    }
  }
};

export const ExternalContactExternalProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContactExternalProfile",
    modelProperties: {
      externalAttr: {
        serializedName: "external_attr",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExternalContactExternalProfileExternalAttrItem"
            }
          }
        }
      }
    }
  }
};

export const ExternalContactExternalProfileExternalAttrItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContactExternalProfileExternalAttrItem",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className: "ExternalContactExternalProfileExternalAttrItemWeb"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "ExternalContactExternalProfileExternalAttrItemText"
        }
      },
      miniprogram: {
        serializedName: "miniprogram",
        type: {
          name: "Composite",
          className: "ExternalContactExternalProfileExternalAttrItemMiniprogram"
        }
      }
    }
  }
};

export const ExternalContactExternalProfileExternalAttrItemWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContactExternalProfileExternalAttrItemWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExternalContactExternalProfileExternalAttrItemText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContactExternalProfileExternalAttrItemText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExternalContactExternalProfileExternalAttrItemMiniprogram: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalContactExternalProfileExternalAttrItemMiniprogram",
    modelProperties: {
      appid: {
        serializedName: "appid",
        type: {
          name: "String"
        }
      },
      pagepath: {
        serializedName: "pagepath",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProfileWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileWeb",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      web: {
        serializedName: "web",
        type: {
          name: "Composite",
          className: "ProfileWebWeb"
        }
      }
    }
  }
};

export const ProfileWebWeb: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileWebWeb",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProfileText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileText",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "Composite",
          className: "ProfileTextText"
        }
      }
    }
  }
};

export const ProfileTextText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProfileTextText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactFollowUser: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactFollowUser",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      remark: {
        serializedName: "remark",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createtime: {
        serializedName: "createtime",
        type: {
          name: "Number"
        }
      },
      remarkCorpName: {
        serializedName: "remark_corp_name",
        type: {
          name: "String"
        }
      },
      operUserid: {
        serializedName: "oper_userid",
        type: {
          name: "String"
        }
      },
      addWay: {
        serializedName: "add_way",
        type: {
          name: "Number"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      remarkMobiles: {
        serializedName: "remark_mobiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContactFollowUserTagsItem"
            }
          }
        }
      }
    }
  }
};

export const ContactFollowUserTagsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactFollowUserTagsItem",
    modelProperties: {
      groupName: {
        serializedName: "group_name",
        type: {
          name: "String"
        }
      },
      tagName: {
        serializedName: "tag_name",
        type: {
          name: "String"
        }
      },
      tagId: {
        serializedName: "tag_id",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TagUserInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagUserInfo",
    modelProperties: {
      userid: {
        serializedName: "userid",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FileMsg: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FileMsg",
    modelProperties: {
      mediaId: {
        serializedName: "media_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathsDyq687MediaUploadPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsDyq687MediaUploadPostRequestbodyContentMultipartFormDataSchema",
    modelProperties: {
      filename: {
        serializedName: "filename",
        type: {
          name: "Stream"
        }
      }
    }
  }
};

export const Paths1661VofMediaUploadimgPostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1661VofMediaUploadimgPostRequestbodyContentMultipartFormDataSchema",
    modelProperties: {
      filename: {
        serializedName: "filename",
        required: true,
        type: {
          name: "Stream"
        }
      }
    }
  }
};
