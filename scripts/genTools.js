'use strict';
const path = require("path")
const { readdirSync, writeFileSync } = require("fs");

const TOOL_FILE_NAME = "tool.config.js"
const ROOT_DIR = path.join(__dirname, "..")
const TOOLS_DIR = path.join(ROOT_DIR, "src", "tools")

function main() {
  const toolDirs = readdirSync(path.join(TOOLS_DIR))
  console.log(toolDirs)
  const configFiles = toolDirs.map(dirName => path.join(TOOLS_DIR, dirName, TOOL_FILE_NAME))

  const tools = {}
  configFiles.forEach(filePath => {
    const tool = require(filePath)
    tools[tool.slug] = tool
  })
  writeFileSync(path.join(ROOT_DIR, "public", "tools.json"), JSON.stringify(tools, undefined , 2))
}

main()
