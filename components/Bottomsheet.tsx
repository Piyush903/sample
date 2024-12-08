import React, {
  useCallback,
  useImperativeHandle,
  ReactNode,
  ForwardedRef,
} from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetProps = {
  children: ReactNode;
  color: string;
  txt: string;
};

export type BottomSheetHandle = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef(
  (
    { children, color, txt }: BottomSheetProps,
    ref: ForwardedRef<BottomSheetHandle>
  ) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      "worklet";
      active.value = destination !== 0;

      translateY.value = withSpring(destination, {
        damping: 50,
        stiffness: 200,
      });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = Math.min(
          Math.max(event.translationY + context.value.y, MAX_TRANSLATE_Y),
          0
        );
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );

      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      } as ViewStyle;
    });

    const rBackgroundStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        translateY.value,
        [0, MAX_TRANSLATE_Y],
        [0, 0.5],
        Extrapolate.CLAMP
      ),
    }));

    return (
      <>
        {/* Background Dimmer */}
        <Animated.View style={[styles.backgroundDim, rBackgroundStyle]} />
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              { ...styles.bottomSheetContainer, backgroundColor: color },
              rBottomSheetStyle,
            ]}
          >
            {/* Drag Handle */}
            <View style={styles.line} />
            {/* Title/Text */}
            <Text
              style={styles.text}
              accessibilityLabel="Comment Section"
              accessibilityHint="Swipe up or down to open or close the comment section"
            >
              {txt}
            </Text>
            {/* Content */}
            {children}
          </Animated.View>
        </GestureDetector>
      </>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT + 40,
    borderRadius: 25,
  } as ViewStyle,
  line: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 2,
  } as ViewStyle,
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  } as TextStyle,
  backgroundDim: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
  } as ViewStyle,
});

export default BottomSheet;
