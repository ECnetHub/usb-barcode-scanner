"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_hid_1 = require("node-hid");
var lodash_1 = __importDefault(require("lodash"));
function getDevices() {
    return node_hid_1.devices();
}
exports.getDevices = getDevices;
function getDevice(vendorId, productId) {
    return lodash_1.default.find(getDevices(), { 'vendorId': vendorId, 'productId': productId });
}
exports.getDevice = getDevice;
function getDeviceByPath(path) {
    return lodash_1.default.find(getDevices(), { 'path': path });
}
exports.getDeviceByPath = getDeviceByPath;
function defaultHidMap() {
    return {
        4: {
            unmodified: "a",
            shift: "A"
        },
        5: {
            unmodified: "b",
            shift: "B"
        },
        6: {
            unmodified: "c",
            shift: "C"
        },
        7: {
            unmodified: "d",
            shift: "D"
        },
        8: {
            unmodified: "e",
            shift: "E"
        },
        9: {
            unmodified: "f",
            shift: "F"
        },
        10: {
            unmodified: "g",
            shift: "G"
        },
        11: {
            unmodified: "h",
            shift: "H"
        },
        12: {
            unmodified: "i",
            shift: "I"
        },
        13: {
            unmodified: "j",
            shift: "J"
        },
        14: {
            unmodified: "k",
            shift: "K"
        },
        15: {
            unmodified: "l",
            shift: "L"
        },
        16: {
            unmodified: "m",
            shift: "M"
        },
        17: {
            unmodified: "n",
            shift: "N"
        },
        18: {
            unmodified: "o",
            shift: "O"
        },
        19: {
            unmodified: "p",
            shift: "P"
        },
        20: {
            unmodified: "q",
            shift: "Q"
        },
        21: {
            unmodified: "r",
            shift: "R"
        },
        22: {
            unmodified: "s",
            shift: "S"
        },
        23: {
            unmodified: "t",
            shift: "T"
        },
        24: {
            unmodified: "u",
            shift: "U"
        },
        25: {
            unmodified: "v",
            shift: "V"
        },
        26: {
            unmodified: "w",
            shift: "W"
        },
        27: {
            unmodified: "x",
            shift: "X"
        },
        28: {
            unmodified: "y",
            shift: "Y"
        },
        29: {
            unmodified: "z",
            shift: "Z"
        },
        30: {
            unmodified: "1",
            shift: "!"
        },
        31: {
            unmodified: "2",
            shift: "@"
        },
        32: {
            unmodified: "3",
            shift: "#"
        },
        33: {
            unmodified: "4",
            shift: "$"
        },
        34: {
            unmodified: "5",
            shift: "%"
        },
        35: {
            unmodified: "6",
            shift: "^"
        },
        36: {
            unmodified: "7",
            shift: "&"
        },
        37: {
            unmodified: "8",
            shift: "*"
        },
        38: {
            unmodified: "9",
            shift: "("
        },
        39: {
            unmodified: "0",
            shift: ")"
        },
        40: {
            unmodified: "enter"
        },
        43: {
            unmodified: "\t",
        },
        44: {
            unmodified: " "
        },
        45: {
            unmodified: "-",
            shift: "_"
        },
        46: {
            unmodified: "=",
            shift: "+"
        },
        47: {
            unmodified: "[",
            shift: "{"
        },
        48: {
            unmodified: "]",
            shift: "}"
        },
        49: {
            unmodified: "\\",
            shift: "|"
        },
        51: {
            unmodified: ";",
            shift: ":"
        },
        52: {
            unmodified: "'",
            shift: "\""
        },
        53: {
            unmodified: "`",
            shift: "~"
        },
        54: {
            unmodified: ",",
            shift: "<"
        },
        55: {
            unmodified: ".",
            shift: ">"
        },
        56: {
            unmodified: "/",
            shift: "?"
        },
        85: {
            unmodified: "*",
        },
        87: {
            unmodified: "+"
        }
    };
}
exports.defaultHidMap = defaultHidMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNiLWJhcmNvZGUtc2Nhbm5lci11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91c2ItYmFyY29kZS1zY2FubmVyLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTJDO0FBQzNDLGtEQUF1QjtBQUV2QjtJQUNJLE9BQU8sa0JBQU8sRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFGRCxnQ0FFQztBQUVELG1CQUEwQixRQUFnQixFQUFFLFNBQWlCO0lBQ3pELE9BQU8sZ0JBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLENBQUM7QUFGRCw4QkFFQztBQUVELHlCQUFnQyxJQUFZO0lBQ3hDLE9BQU8sZ0JBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRkQsMENBRUM7QUFlRDtJQUNJLE9BQU87UUFDSCxDQUFDLEVBQUU7WUFDQyxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxDQUFDLEVBQUU7WUFDQyxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxDQUFDLEVBQUU7WUFDQyxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxDQUFDLEVBQUU7WUFDQyxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxDQUFDLEVBQUU7WUFDQyxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxDQUFDLEVBQUU7WUFDQyxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsT0FBTztTQUN0QjtRQUNELEVBQUUsRUFBRTtZQUNBLFVBQVUsRUFBRSxJQUFJO1NBQ25CO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7U0FDbEI7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHO1NBQ2I7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsSUFBSTtZQUNoQixLQUFLLEVBQUUsR0FBRztTQUNiO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNiO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsSUFBSTtTQUNkO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNiO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNiO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNiO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsR0FBRztTQUNiO1FBQ0QsRUFBRSxFQUFFO1lBQ0EsVUFBVSxFQUFFLEdBQUc7U0FDbEI7UUFDRCxFQUFFLEVBQUU7WUFDQSxVQUFVLEVBQUUsR0FBRztTQUNsQjtLQUNKLENBQUE7QUFDTCxDQUFDO0FBOU1ELHNDQThNQyJ9