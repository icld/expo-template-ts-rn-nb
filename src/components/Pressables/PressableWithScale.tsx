import { FC, ReactNode } from 'react';
import { Pressable, Box } from 'native-base';

type PressableWithScaleProps = {
  children: ReactNode;
  onPress: () => void;
};

const PressableWithScale: FC<PressableWithScaleProps> = ({
  children,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => {
        return (
          <Box
            alignItems={'center'}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.9 : 1,
                },
              ],
            }}
          >
            {children}
          </Box>
        );
      }}
    </Pressable>
  );
};

export default PressableWithScale;
