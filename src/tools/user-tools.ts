import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getUsersForWorkspaceTool: Tool = {
  name: "asana_get_users_for_workspace",
  description: "Get all users in a workspace or organization. Returns compact user records with name and email.",
  inputSchema: {
    type: "object",
    properties: {
      workspace_gid: {
        type: "string",
        description: "The workspace or organization GID to get users for",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'name,email,photo,workspaces')",
      },
      limit: {
        type: "number",
        description: "Results per page (1-100)",
      },
      offset: {
        type: "string",
        description: "Pagination offset token",
      },
    },
    required: ["workspace_gid"],
  },
};

export const getUserTool: Tool = {
  name: "asana_get_user",
  description: "Get detailed information about a specific user. Use 'me' as user_gid to get the authenticated user's info.",
  inputSchema: {
    type: "object",
    properties: {
      user_gid: {
        type: "string",
        description: "The user GID to retrieve, or 'me' for the authenticated user",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'name,email,photo,workspaces')",
      },
    },
    required: ["user_gid"],
  },
};
