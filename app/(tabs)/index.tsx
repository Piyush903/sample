// import React, { useCallback, useRef } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   Dimensions,
//   ScrollView,
// } from "react-native";
// import {
//   GestureHandlerRootView,
//   TouchableOpacity,
// } from "react-native-gesture-handler";
// import BottomSheet, { BottomSheetHandle } from "../../components/Bottomsheet";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import { FlashList } from "@shopify/flash-list";

// const SCREEN_WIDTH = Dimensions.get("window").width;

// type Post = {
//   id: string;
//   image: string;
//   caption: string;
//   likes: number;
//   comments: number;
// };

// const data: Post[] = [
//   {
//     id: "1",
//     image: "https://via.placeholder.com/300",
//     caption: "A beautiful sunset",
//     likes: 120,
//     comments: 15,
//   },
//   {
//     id: "2",
//     image: "https://via.placeholder.com/400",
//     caption: "Amazing mountain view",
//     likes: 200,
//     comments: 30,
//   },
//   {
//     id: "3",
//     image: "https://via.placeholder.com/500",
//     caption: "City lights at night",
//     likes: 300,
//     comments: 45,
//   },
// ];

// const PostCard = ({
//   item,
//   onCommentPress,
// }: {
//   item: Post;
//   onCommentPress: () => void;
// }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <View style={styles.actions}>
//           <AntDesign name="hearto" size={24} color="black" />
//           <Text style={styles.likes}>{item.likes} Likes</Text>
//           <TouchableOpacity onPress={onCommentPress}>
//             <FontAwesome name="comment-o" size={24} color="black" />
//           </TouchableOpacity>
//           <Text style={styles.comments}>{item.comments} Comments</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default function App() {
//   const ref = useRef<BottomSheetHandle>(null);

//   const onCommentPress = useCallback(() => {
//     const isActive = ref.current?.isActive();
//     if (isActive) {
//       ref.current?.scrollTo(0);
//     } else {
//       ref.current?.scrollTo(-400);
//     }
//   }, []);

//   const renderItem = ({ item }: { item: Post }) => (
//     <PostCard item={item} onCommentPress={onCommentPress} />
//   );

//   const modalComponent = (
//     <ScrollView>
//       <View>
//         <Text style={styles.commentText}>This is a comment section</Text>
//         <Text style={styles.commentText}>Comment 1</Text>
//         <Text style={styles.commentText}>Comment 2</Text>
//         <Text style={styles.commentText}>Comment 3</Text>
//         <Text style={styles.commentText}>Comment 4</Text>
//         <Text style={styles.commentText}>Comment 5</Text>
//       </View>
//     </ScrollView>
//   );

//   return (
//     <>
//       <ScrollView style={styles.container}>
//         {/* Feed */}
//         <FlashList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.listContent}
//         />

//         {/* Bottom Sheet */}
//       </ScrollView>
//       <BottomSheet ref={ref} color="white" txt="Comments">
//         <View style={styles.modalContainer}>{modalComponent}</View>
//       </BottomSheet>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   gestureRoot: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//   },
//   header: {
//     width: SCREEN_WIDTH,
//     paddingVertical: 15,
//     backgroundColor: "orange",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },
//   card: {
//     marginBottom: 20,
//     backgroundColor: "white",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//   },
//   details: {
//     padding: 10,
//   },
//   caption: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 10,
//   },
//   actions: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   likes: {
//     marginLeft: 10,
//     fontSize: 14,
//     color: "#888",
//   },
//   comments: {
//     marginLeft: 10,
//     fontSize: 14,
//     color: "#888",
//   },
//   listContent: {
//     paddingHorizontal: 10,
//     paddingBottom: 80,
//   },
//   modalContainer: {
//     padding: 20,
//     backgroundColor: "white",
//     borderRadius: 10,
//   },
//   commentText: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 10,
//   },
// });
// import React, { useCallback, useRef } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Dimensions,
//   ScrollView,
//   FlatList,
// } from "react-native";
// import {
//   GestureHandlerRootView,
//   TouchableOpacity,
// } from "react-native-gesture-handler";
// import BottomSheet, { BottomSheetHandle } from "../../components/Bottomsheet";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import { FlashList } from "@shopify/flash-list";

// const SCREEN_WIDTH = Dimensions.get("window").width;

// type Post = {
//   id: string;
//   image: string;
//   caption: string;
//   likes: number;
//   comments: number;
// };

// const data: Post[] = [
//   {
//     id: "1",
//     image: "https://via.placeholder.com/300",
//     caption: "A beautiful sunset",
//     likes: 120,
//     comments: 15,
//   },
//   {
//     id: "2",
//     image: "https://via.placeholder.com/400",
//     caption: "Amazing mountain view",
//     likes: 200,
//     comments: 30,
//   },
//   {
//     id: "3",
//     image: "https://via.placeholder.com/500",
//     caption: "City lights at night",
//     likes: 300,
//     comments: 45,
//   },
// ];

// const PostCard = ({
//   item,
//   onCommentPress,
// }: {
//   item: Post;
//   onCommentPress: () => void;
// }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <View style={styles.actions}>
//           <AntDesign name="hearto" size={24} color="black" />
//           <Text style={styles.likes}>{item.likes} Likes</Text>
//           <TouchableOpacity onPress={onCommentPress}>
//             <FontAwesome name="comment-o" size={24} color="black" />
//           </TouchableOpacity>
//           <Text style={styles.comments}>{item.comments} Comments</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default function App() {
//   const ref = useRef<BottomSheetHandle>(null);

//   const onCommentPress = useCallback(() => {
//     const isActive = ref.current?.isActive();
//     if (isActive) {
//       ref.current?.scrollTo(0);
//     } else {
//       ref.current?.scrollTo(-400);
//     }
//   }, []);

//   const renderItem = ({ item }: { item: Post }) => (
//     <PostCard item={item} onCommentPress={onCommentPress} />
//   );

//   return (
//     <View style={styles.container}>
//       {/* FlashList */}
//       <ScrollView style={{ flex: 1, flexGrow: 1 }}>
//         <FlashList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.listContent}
//           estimatedItemSize={200} // Helps FlashList optimize performance
//         />
//       </ScrollView>

//       {/* Bottom Sheet */}
//       <BottomSheet ref={ref} color="white" txt="Comments">
//         <View style={styles.modalContainer}>
//           <Text style={styles.commentText}>This is a comment section</Text>
//         </View>
//       </BottomSheet>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   gestureRoot: {
//     flex: 1, // Ensures the root container takes full screen
//   },
//   container: {
//     // Ensures the FlashList container is scrollabl
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//   },
//   card: {
//     marginBottom: 20,
//     backgroundColor: "white",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//   },
//   details: {
//     padding: 10,
//   },
//   caption: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 10,
//   },
//   actions: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   likes: {
//     marginLeft: 10,
//     fontSize: 14,
//     color: "#888",
//   },
//   comments: {
//     marginLeft: 10,
//     fontSize: 14,
//     color: "#888",
//   },
//   listContent: {
//     paddingHorizontal: 10,
//     paddingBottom: 80,
//   },
//   modalContainer: {
//     padding: 20,
//     backgroundColor: "white",
//     borderRadius: 10,
//   },
//   commentText: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 10,
//   },
// });
import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetHandle } from "../../components/Bottomsheet";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";

const SCREEN_WIDTH = Dimensions.get("window").width;

type Post = {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
};

const data: Post[] = [
  {
    id: "1",
    image: "https://via.placeholder.com/300",
    caption: "A beautiful sunset",
    likes: 120,
    comments: 15,
  },
  {
    id: "2",
    image: "https://via.placeholder.com/400",
    caption: "Amazing mountain view",
    likes: 200,
    comments: 30,
  },
  {
    id: "3",
    image: "https://via.placeholder.com/500",
    caption: "City lights at night",
    likes: 300,
    comments: 45,
  },
];

const PostCard = ({
  item,
  onCommentPress,
}: {
  item: Post;
  onCommentPress: () => void;
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.caption}>{item.caption}</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.likes}>{item.likes} Likes</Text>
          <TouchableOpacity onPress={onCommentPress}>
            <FontAwesome name="comment-o" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.comments}>{item.comments} Comments</Text>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  const ref = useRef<BottomSheetHandle>(null);

  const onCommentPress = useCallback(() => {
    const isActive = ref.current?.isActive();
    if (isActive) {
      ref.current?.scrollTo(0);
    } else {
      ref.current?.scrollTo(-400);
    }
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <PostCard item={item} onCommentPress={onCommentPress} />
  );

  return (
    <GestureHandlerRootView>
      <ScrollView>
        {/* FlashList */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          estimatedItemSize={200} // Helps FlashList optimize performance
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      {/* Bottom Sheet */}
      <BottomSheet ref={ref} color="white" txt="Comments">
        <View style={styles.modalContainer}>
          <Text style={styles.commentText}>This is a comment section</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1, // Ensures the root container takes full screen
  },
  container: {
    flex: 1, // Ensures the FlashList container is scrollable
    backgroundColor: "#f0f0f0",
  },
  card: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 10,
  },
  caption: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    marginLeft: 10,
    fontSize: 14,
    color: "#888",
  },
  comments: {
    marginLeft: 10,
    fontSize: 14,
    color: "#888",
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  modalContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  commentText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
});
