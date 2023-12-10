'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Kikku-Bot</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/addRoleCommand.html" data-type="entity-link" >addRoleCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminModule.html" data-type="entity-link" >AdminModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseClient.html" data-type="entity-link" >BaseClient</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCommand.html" data-type="entity-link" class="deprecated-name">BaseCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEvent.html" data-type="entity-link" >BaseEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseInteraction.html" data-type="entity-link" >BaseInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseModule.html" data-type="entity-link" >BaseModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSlashCommand.html" data-type="entity-link" >BaseSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSubGroupSlashCommand.html" data-type="entity-link" >BaseSubGroupSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSubSlashCommand.html" data-type="entity-link" >BaseSubSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/BonkSlashCommand.html" data-type="entity-link" >BonkSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleMemberCommand.html" data-type="entity-link" >CreateRoleMemberCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseModuleHandler.html" data-type="entity-link" >DatabaseModuleHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateSlashCommand.html" data-type="entity-link" >DateSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/DisableSlashCommand.html" data-type="entity-link" >DisableSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnableSlashCommand.html" data-type="entity-link" >EnableSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exception.html" data-type="entity-link" >Exception</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameModule.html" data-type="entity-link" >GameModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/GuildCreateEvent.html" data-type="entity-link" >GuildCreateEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/GuildUpdateEvent.html" data-type="entity-link" >GuildUpdateEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeadTalesCommand.html" data-type="entity-link" >HeadTalesCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/HelpNextModuleButtonInteraction.html" data-type="entity-link" >HelpNextModuleButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/HelpNextPageButtonInteraction.html" data-type="entity-link" >HelpNextPageButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/HelpPreviousModuleButtonInteraction.html" data-type="entity-link" >HelpPreviousModuleButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/HelpPreviousPageButtonInteraction.html" data-type="entity-link" >HelpPreviousPageButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/HelpSlashCommand.html" data-type="entity-link" >HelpSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent-1.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent-2.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent-3.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent-4.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent-5.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionCreatedEvent-6.html" data-type="entity-link" >InteractionCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Jikan.html" data-type="entity-link" >Jikan</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logger.html" data-type="entity-link" >Logger</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerFileEnum.html" data-type="entity-link" >LoggerFileEnum</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerTypeEnum.html" data-type="entity-link" >LoggerTypeEnum</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberJoinEvent.html" data-type="entity-link" >MemberJoinEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MemberLeaveEvent.html" data-type="entity-link" >MemberLeaveEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageCreatedEvent.html" data-type="entity-link" >MessageCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageDeletedEvent.html" data-type="entity-link" >MessageDeletedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageEditedEvent.html" data-type="entity-link" >MessageEditedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageReactionAddEvent.html" data-type="entity-link" >MessageReactionAddEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageReactionAddEvent-1.html" data-type="entity-link" >MessageReactionAddEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModerationModule.html" data-type="entity-link" >ModerationModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModuleSlashCommand.html" data-type="entity-link" >ModuleSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/MuteSlashCommand.html" data-type="entity-link" >MuteSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/MuteSlashCommand-1.html" data-type="entity-link" >MuteSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/MuteSlashCommand-2.html" data-type="entity-link" >MuteSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelCategoryInteraction.html" data-type="entity-link" >PanelCategoryInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeActionEditSelectInteraction.html" data-type="entity-link" >PanelChangeActionEditSelectInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeCategoryInteraction.html" data-type="entity-link" >PanelChangeCategoryInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeCategoryInteraction-1.html" data-type="entity-link" >PanelChangeCategoryInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeDeleteSelectInteraction.html" data-type="entity-link" >PanelChangeDeleteSelectInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeDescriptionInteraction.html" data-type="entity-link" >PanelChangeDescriptionInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeDescriptionInteraction-1.html" data-type="entity-link" >PanelChangeDescriptionInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeDescriptionInteraction-2.html" data-type="entity-link" >PanelChangeDescriptionInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeDescriptionInteraction-3.html" data-type="entity-link" >PanelChangeDescriptionInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeEditSelectInteraction.html" data-type="entity-link" >PanelChangeEditSelectInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeNameInteraction.html" data-type="entity-link" >PanelChangeNameInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeNameInteraction-1.html" data-type="entity-link" >PanelChangeNameInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeRoleInteraction.html" data-type="entity-link" >PanelChangeRoleInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeRoleInteraction-1.html" data-type="entity-link" >PanelChangeRoleInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeTranscriptInteraction.html" data-type="entity-link" >PanelChangeTranscriptInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelChangeTranscriptInteraction-1.html" data-type="entity-link" >PanelChangeTranscriptInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelConfirmDeleteInteraction.html" data-type="entity-link" >PanelConfirmDeleteInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelCreateInteraction.html" data-type="entity-link" >PanelCreateInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelDeleteInteraction.html" data-type="entity-link" >PanelDeleteInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelDeleteTicketsInteraction.html" data-type="entity-link" >PanelDeleteTicketsInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelEditInteraction.html" data-type="entity-link" >PanelEditInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelRefreshInteraction.html" data-type="entity-link" >PanelRefreshInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelRoleInteraction.html" data-type="entity-link" >PanelRoleInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelSendChannelInteraction.html" data-type="entity-link" >PanelSendChannelInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelSendChannelInteraction-1.html" data-type="entity-link" >PanelSendChannelInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelSendChannelInteraction-2.html" data-type="entity-link" >PanelSendChannelInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelTranscriptInteraction.html" data-type="entity-link" >PanelTranscriptInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/PongSlashCommand.html" data-type="entity-link" >PongSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReactionRole.html" data-type="entity-link" >ReactionRole</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadyEvent.html" data-type="entity-link" >ReadyEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketAddUserCommand.html" data-type="entity-link" >TicketAddUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketCancelDeleteButtonInteraction.html" data-type="entity-link" >TicketCancelDeleteButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketCloseButtonInteraction.html" data-type="entity-link" >TicketCloseButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketCloseButtonInteraction-1.html" data-type="entity-link" >TicketCloseButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketCreateCommand.html" data-type="entity-link" >TicketCreateCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketCreateCommand-1.html" data-type="entity-link" >TicketCreateCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketDeleteButtonInteraction.html" data-type="entity-link" >TicketDeleteButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketManager.html" data-type="entity-link" >TicketManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketModule.html" data-type="entity-link" >TicketModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketOpenButtonInteraction.html" data-type="entity-link" >TicketOpenButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketOpenButtonInteraction-1.html" data-type="entity-link" >TicketOpenButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketOpenButtonInteraction-2.html" data-type="entity-link" >TicketOpenButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketOpenButtonInteraction-3.html" data-type="entity-link" >TicketOpenButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketOpenButtonInteraction-4.html" data-type="entity-link" >TicketOpenButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketRemoveUserCommand.html" data-type="entity-link" >TicketRemoveUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketSaveButtonInteraction.html" data-type="entity-link" >TicketSaveButtonInteraction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketSetupPanelCommand.html" data-type="entity-link" >TicketSetupPanelCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnmuteSlashCommand.html" data-type="entity-link" >UnmuteSlashCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/WaifuModule.html" data-type="entity-link" >WaifuModule</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BaseClientInfo.html" data-type="entity-link" >BaseClientInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseCommandOptions.html" data-type="entity-link" >BaseCommandOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseInteractionOptions.html" data-type="entity-link" >BaseInteractionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseSlashCommandOptions.html" data-type="entity-link" >BaseSlashCommandOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseFieldSchema.html" data-type="entity-link" >DatabaseFieldSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseGlobalSchema.html" data-type="entity-link" >DatabaseGlobalSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseGuildSchema.html" data-type="entity-link" >DatabaseGuildSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseSchemas.html" data-type="entity-link" >DatabaseSchemas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseUserSchema.html" data-type="entity-link" >DatabaseUserSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmbedError.html" data-type="entity-link" >EmbedError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JikanCharacter.html" data-type="entity-link" >JikanCharacter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JikanImage.html" data-type="entity-link" >JikanImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JikanPagination.html" data-type="entity-link" >JikanPagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JikanSearchCharacter.html" data-type="entity-link" >JikanSearchCharacter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SlashCommandOptions.html" data-type="entity-link" >SlashCommandOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});