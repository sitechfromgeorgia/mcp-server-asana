import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getCustomFieldsForProjectTool: Tool = {
  name: "asana_get_custom_fields_for_project",
  description: "Get all custom field settings for a project. Returns custom field definitions including names, types, enum options, and GIDs. Useful for understanding what custom fields are available before searching or creating tasks.",
  inputSchema: {
    type: "object",
    properties: {
      project_gid: {
        type: "string",
        description: "The project GID to get custom field settings for",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'custom_field,custom_field.name,custom_field.type,custom_field.enum_options')",
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
    required: ["project_gid"],
  },
};
