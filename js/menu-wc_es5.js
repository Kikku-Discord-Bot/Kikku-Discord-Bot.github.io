'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">Kikku-Bot</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/addRoleCommand.html\" data-type=\"entity-link\" >addRoleCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseClient.html\" data-type=\"entity-link\" >BaseClient</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseCommand.html\" data-type=\"entity-link\" >BaseCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseEvent.html\" data-type=\"entity-link\" >BaseEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseInteraction.html\" data-type=\"entity-link\" >BaseInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseModule.html\" data-type=\"entity-link\" >BaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseSlashCommand.html\" data-type=\"entity-link\" >BaseSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BonkSlashCommand.html\" data-type=\"entity-link\" >BonkSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateRoleMemberCommand.html\" data-type=\"entity-link\" >CreateRoleMemberCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DBConnection.html\" data-type=\"entity-link\" >DBConnection</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Exception.html\" data-type=\"entity-link\" >Exception</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GameModule.html\" data-type=\"entity-link\" >GameModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GuildCreateEvent.html\" data-type=\"entity-link\" >GuildCreateEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GuildHandler.html\" data-type=\"entity-link\" >GuildHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GuildUpdateEvent.html\" data-type=\"entity-link\" >GuildUpdateEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HeadButtonInteraction.html\" data-type=\"entity-link\" >HeadButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HeadTalesCommand.html\" data-type=\"entity-link\" >HeadTalesCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HelpNextModuleButtonInteraction.html\" data-type=\"entity-link\" >HelpNextModuleButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HelpNextPageButtonInteraction.html\" data-type=\"entity-link\" >HelpNextPageButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HelpPreviousModuleButtonInteraction.html\" data-type=\"entity-link\" >HelpPreviousModuleButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HelpPreviousPageButtonInteraction.html\" data-type=\"entity-link\" >HelpPreviousPageButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HelpSlashCommand.html\" data-type=\"entity-link\" >HelpSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InteractionCreatedEvent.html\" data-type=\"entity-link\" >InteractionCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InteractionCreatedEvent-1.html\" data-type=\"entity-link\" >InteractionCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InteractionCreatedEvent-2.html\" data-type=\"entity-link\" >InteractionCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InteractionCreatedEvent-3.html\" data-type=\"entity-link\" >InteractionCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InteractionCreatedEvent-4.html\" data-type=\"entity-link\" >InteractionCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InteractionCreatedEvent-5.html\" data-type=\"entity-link\" >InteractionCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Logger.html\" data-type=\"entity-link\" >Logger</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoggerEnum.html\" data-type=\"entity-link\" >LoggerEnum</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MemberJoinEvent.html\" data-type=\"entity-link\" >MemberJoinEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MemberLeaveEvent.html\" data-type=\"entity-link\" >MemberLeaveEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MessageCreatedEvent.html\" data-type=\"entity-link\" >MessageCreatedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MessageDeletedEvent.html\" data-type=\"entity-link\" >MessageDeletedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MessageEditedEvent.html\" data-type=\"entity-link\" >MessageEditedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MessageReactionAddEvent.html\" data-type=\"entity-link\" >MessageReactionAddEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MessageReactionAddEvent-1.html\" data-type=\"entity-link\" >MessageReactionAddEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ModerationModule.html\" data-type=\"entity-link\" >ModerationModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MuteSlashCommand.html\" data-type=\"entity-link\" >MuteSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MuteSlashCommand-1.html\" data-type=\"entity-link\" >MuteSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MuteSlashCommand-2.html\" data-type=\"entity-link\" >MuteSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelCategoryInteraction.html\" data-type=\"entity-link\" >PanelCategoryInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeActionEditSelectInteraction.html\" data-type=\"entity-link\" >PanelChangeActionEditSelectInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeCategoryInteraction.html\" data-type=\"entity-link\" >PanelChangeCategoryInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeCategoryInteraction-1.html\" data-type=\"entity-link\" >PanelChangeCategoryInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeDeleteSelectInteraction.html\" data-type=\"entity-link\" >PanelChangeDeleteSelectInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeDescriptionInteraction.html\" data-type=\"entity-link\" >PanelChangeDescriptionInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeDescriptionInteraction-1.html\" data-type=\"entity-link\" >PanelChangeDescriptionInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeDescriptionInteraction-2.html\" data-type=\"entity-link\" >PanelChangeDescriptionInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeDescriptionInteraction-3.html\" data-type=\"entity-link\" >PanelChangeDescriptionInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeEditSelectInteraction.html\" data-type=\"entity-link\" >PanelChangeEditSelectInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeNameInteraction.html\" data-type=\"entity-link\" >PanelChangeNameInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeNameInteraction-1.html\" data-type=\"entity-link\" >PanelChangeNameInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeRoleInteraction.html\" data-type=\"entity-link\" >PanelChangeRoleInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeRoleInteraction-1.html\" data-type=\"entity-link\" >PanelChangeRoleInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeTranscriptInteraction.html\" data-type=\"entity-link\" >PanelChangeTranscriptInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelChangeTranscriptInteraction-1.html\" data-type=\"entity-link\" >PanelChangeTranscriptInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelConfirmDeleteInteraction.html\" data-type=\"entity-link\" >PanelConfirmDeleteInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelCreateInteraction.html\" data-type=\"entity-link\" >PanelCreateInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelDeleteInteraction.html\" data-type=\"entity-link\" >PanelDeleteInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelDeleteTicketsInteraction.html\" data-type=\"entity-link\" >PanelDeleteTicketsInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelEditInteraction.html\" data-type=\"entity-link\" >PanelEditInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelRefreshInteraction.html\" data-type=\"entity-link\" >PanelRefreshInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelRoleInteraction.html\" data-type=\"entity-link\" >PanelRoleInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelSendChannelInteraction.html\" data-type=\"entity-link\" >PanelSendChannelInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelSendChannelInteraction-1.html\" data-type=\"entity-link\" >PanelSendChannelInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelSendChannelInteraction-2.html\" data-type=\"entity-link\" >PanelSendChannelInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelTicketEnum.html\" data-type=\"entity-link\" >PanelTicketEnum</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelTicketHandler.html\" data-type=\"entity-link\" >PanelTicketHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PanelTranscriptInteraction.html\" data-type=\"entity-link\" >PanelTranscriptInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PongCommand.html\" data-type=\"entity-link\" >PongCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PongSlashCommand.html\" data-type=\"entity-link\" >PongSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ReactionRole.html\" data-type=\"entity-link\" >ReactionRole</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ReadyEvent.html\" data-type=\"entity-link\" >ReadyEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Ticket.html\" data-type=\"entity-link\" >Ticket</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketAddUserCommand.html\" data-type=\"entity-link\" >TicketAddUserCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketCancelDeleteButtonInteraction.html\" data-type=\"entity-link\" >TicketCancelDeleteButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketCloseButtonInteraction.html\" data-type=\"entity-link\" >TicketCloseButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketCloseButtonInteraction-1.html\" data-type=\"entity-link\" >TicketCloseButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketCreateCommand.html\" data-type=\"entity-link\" >TicketCreateCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketCreateCommand-1.html\" data-type=\"entity-link\" >TicketCreateCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketDeleteButtonInteraction.html\" data-type=\"entity-link\" >TicketDeleteButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketHandler.html\" data-type=\"entity-link\" >TicketHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketManager.html\" data-type=\"entity-link\" >TicketManager</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketModule.html\" data-type=\"entity-link\" >TicketModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketOpenButtonInteraction.html\" data-type=\"entity-link\" >TicketOpenButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketOpenButtonInteraction-1.html\" data-type=\"entity-link\" >TicketOpenButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketOpenButtonInteraction-2.html\" data-type=\"entity-link\" >TicketOpenButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketOpenButtonInteraction-3.html\" data-type=\"entity-link\" >TicketOpenButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketOpenButtonInteraction-4.html\" data-type=\"entity-link\" >TicketOpenButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketRemoveUserCommand.html\" data-type=\"entity-link\" >TicketRemoveUserCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketSaveButtonInteraction.html\" data-type=\"entity-link\" >TicketSaveButtonInteraction</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TicketSetupPanelCommand.html\" data-type=\"entity-link\" >TicketSetupPanelCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UnmuteSlashCommand.html\" data-type=\"entity-link\" >UnmuteSlashCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserHandler.html\" data-type=\"entity-link\" >UserHandler</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/BaseClientInfo.html\" data-type=\"entity-link\" >BaseClientInfo</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EmbebError.html\" data-type=\"entity-link\" >EmbebError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SlashCommandOptions.html\" data-type=\"entity-link\" >SlashCommandOptions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));