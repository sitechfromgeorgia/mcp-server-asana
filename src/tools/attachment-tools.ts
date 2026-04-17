import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getAttachmentsForTaskTool: Tool = {
  name: "asana_get_attachments_for_task",
  description: "Get all attachments on a task. Returns attachment metadata including name, download URL, and file type.",
  inputSchema: {
    type: "object",
    properties: {
      task_gid: {
        type: "string",
        description: "The task GID to get attachments for",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'name,download_url,host,view_url,created_at,size')",
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
    required: ["task_gid"],
  },
};

export const getAttachmentTool: Tool = {
  name: "asana_get_attachment",
  description: "Get detailed information about a specific attachment including its download URL.",
  inputSchema: {
    type: "object",
    properties: {
      attachment_gid: {
        type: "string",
        description: "The attachment GID to retrieve",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'name,download_url,host,view_url,created_at,size,parent')",
      },
    },
    required: ["attachment_gid"],
  },
};
