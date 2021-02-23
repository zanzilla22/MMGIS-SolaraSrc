import LayersTool from '../essence/Tools/Layers/LayersTool'
import LegendTool from '../essence/Tools/Legend/LegendTool'
import InfoTool from '../essence/Tools/Info/InfoTool'
import SitesTool from '../essence/Tools/Sites/SitesTool'
import ChemistryTool from '../essence/Tools/Chemistry/ChemistryTool'
import DrawTool from '../essence/Tools/Draw/DrawTool'
import DrawToolTest from '../essence/Tools/Draw/DrawTool.test'
import IdentifierTool from '../essence/Tools/Identifier/IdentifierTool'
import kinds from '../essence/Tools/Kinds/Kinds'
import MeasureTool from '../essence/Tools/Measure/MeasureTool'

export const toolConfigs = {"Layers":{"defaultIcon":"buffer","description":"Hierarchically toggle layers on and off and alter their opacities.","descriptionFull":{"title":"Hierarchically toggle layers on and off and alter their opacities.","example":{"expanded":"(bool) is initial state expanded [default false]"}},"hasVars":true,"name":"Layers","toolbarPriority":1,"paths":{"LayersTool":"essence/Tools/Layers/LayersTool"}},"Legend":{"defaultIcon":"format-list-bulleted-type","description":"Show a chart mapping colors and symbols to meaning.","descriptionFull":"","hasVars":false,"name":"Legend","toolbarPriority":2,"paths":{"LegendTool":"essence/Tools/Legend/LegendTool"}},"Info":{"defaultIcon":"information-variant","description":"Display the geojson properties field of a clicked point.","descriptionFull":"","hasVars":false,"name":"Info","toolbarPriority":3,"paths":{"InfoTool":"essence/Tools/Info/InfoTool"}},"Sites":{"defaultIcon":"pin","description":"A button bar to navigate between various map locations.","descriptionFull":{"title":"A button bar to quickly navigate between preset map locations.","example":{"sites":[{"name":"(str) Name of site","code":"(str) Unique identifier. Can match header layer to toggle it's sublayers","view":["(num) Latitude","(num) Longitude","(num) Zoom level"]},{"...":"..."}]}},"hasVars":true,"name":"Sites","toolbarPriority":4,"paths":{"SitesTool":"essence/Tools/Sites/SitesTool"}},"Chemistry":{"defaultIcon":"flask","description":"Display chemistry percentages via graphs of a clicked point.","descriptionFull":{},"hasVars":false,"name":"Chemistry","paths":{"ChemistryTool":"essence/Tools/Chemistry/ChemistryTool"}},"Draw":{"defaultIcon":"pencil","description":"Advanced drawing","descriptionFull":{"title":"","example":{"intents":["Polygon_1_Alias","Polygon_2_Alias","Polygon_3_Alias","Line_Alias","Point_Alias"]}},"hasVars":true,"name":"Draw","paths":{"DrawTool":"essence/Tools/Draw/DrawTool"},"tests":{"DrawToolTest":"essence/Tools/Draw/DrawTool.test"}},"Identifier":{"defaultIcon":"map-marker","description":"Mouse over the map for a by-pixel legend of a raster.","descriptionFull":{"title":"Mouse over to query underlying datasets.","example":{"[Layer_Name]":{"url":"(str) path_to_data/data.tif","bands":"(int) how many bands to query from","sigfigs":"(int) how many digits after the decimal","unit":"(str) whatever string unit"},"...":{}}},"hasVars":true,"name":"Identifier","paths":{"IdentifierTool":"essence/Tools/Identifier/IdentifierTool"}},"Kinds":{"defaultIcon":"palette-swatch","description":"Not a real tool but plugin to configure different layer interactions.","descriptionFull":{},"hasVars":false,"name":"Kinds","kinds":["info","waypoint","chemistry_tool","draw_tool"],"paths":{"Kinds":"essence/Tools/Kinds/Kinds"}},"Measure":{"defaultIcon":"tape-measure","description":"Measure distances and generates elevation profiles.","descriptionFull":{"title":"Specify a path to a Digital Elevation Model (dem) .tif. Measure distances and generates elevation profiles. Can also query specific bands at specific points of images and generate profiles of them.","example":{"dem":"(str) path to Data/missionDEM.tif"}},"hasVars":true,"name":"Measure","paths":{"MeasureTool":"essence/Tools/Measure/MeasureTool"}}}
export const toolModules = {LayersTool:LayersTool,LegendTool:LegendTool,InfoTool:InfoTool,SitesTool:SitesTool,ChemistryTool:ChemistryTool,DrawTool:DrawTool,IdentifierTool:IdentifierTool,MeasureTool:MeasureTool}
export const testModules = {DrawToolTest:DrawToolTest}
export const Kinds = kinds