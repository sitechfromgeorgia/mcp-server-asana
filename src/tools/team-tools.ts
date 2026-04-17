import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const getTeamsForWorkspaceTool: Tool = {
  name: "asana_get_teams_for_workspace",
  description: "Get all teams in a workspace or organization. Only available in organizations (not personal workspaces).",
  inputSchema: {
    type: "object",
    properties: {
      workspace_gid: {
        type: "string",
        description: "The workspace or organization GID to get teams for",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'name,description,html_description')",
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

export const getProjectsForTeamTool: Tool = {
  name: "asana_get_projects_for_team",
  description: "Get all projects for a specific team. Useful for listing projects organized by team.",
  inputSchema: {
    type: "object",
    properties: {
      team_gid: {
        type: "string",
        description: "The team GID to get projects for",
      },
      archived: {
        type: "boolean",
        description: "Only return archived projects (default: false)",
      },
      opt_fields: {
        type: "string",
        description:
          "Comma-separated list of optional fields to include (e.g. 'name,notes,color,archived,created_at')",
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
    required: ["team_gid"],
  },
};
