import styled from 'styled-components'
import {Dimmer, Sidebar, Container} from 'semantic-ui-react'

export const PageLayout = styled.div`height: 100%;`

export const MainLayout = styled.div`
	display: flex;
	flex-direction: column;
	color: ${props => props.theme.primaryTextColor};
	background-color: ${props => props.theme.primaryColorText};
`

export const MainContent = styled.main`
	height: calc(100% - 72px);
	display: flex;
	flex-direction: column;
`

export const SidebarSemanticPusherStyled = styled(Sidebar.Pusher)`
	-webkit-overflow-scrolling: touch;
`

export const SidebarSemanticPushableStyled = styled(Sidebar.Pushable)`
	display: initial;
	> .pusher {
		overflow: visible !important;
	}
`

export const MainContainer = styled(Container)`
	padding-left: 1rem;
	padding-right: 1rem;
	margin-top: 2em;
	margin-bottom: 1em;
	flex-grow: 1;
`

export const StyledDimmer = styled(Dimmer)`
	z-index: 55 !important;
	cursor: pointer;
`
