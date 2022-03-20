import { Box, Icon, IIconProps } from 'native-base';
import {
  ColorType,
  SizeType,
} from 'native-base/lib/typescript/components/types';
import { FC } from 'react';
import PressableWithScale from '../../components/Pressables/PressableWithScale';

type TabIconProps = {
  as: IIconProps['as'];
  name: IIconProps['name'];
  size: SizeType;
  isCurrentRoute: boolean;
};

const TabIcon: FC<TabIconProps> = ({
  as,
  name,
  size = 'md',
  isCurrentRoute,
}) => {
  return (
    <Box w={6}>
      <PressableWithScale onPress={() => null}>
        <Icon
          w={6}
          as={as}
          name={name}
          size={size}
          color={isCurrentRoute ? 'black' : 'gray.100'}
        />
      </PressableWithScale>
    </Box>
  );
};

export default TabIcon;
