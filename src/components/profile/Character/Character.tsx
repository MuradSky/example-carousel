import {CharacterStyles, CharacterWrap} from './CharacterStyles';
import {SelectedCharacter} from './SelectedCharacter';
import {LevelCharacter} from './LevelCaracter';
export const Character = ({ isAvatarSelect } : { isAvatarSelect: boolean }) => {
	return (
		<CharacterStyles>
			<CharacterWrap>
				{isAvatarSelect ? <LevelCharacter/> : <SelectedCharacter/>}
			</CharacterWrap>
		</CharacterStyles>
	)
};
