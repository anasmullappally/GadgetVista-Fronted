import * as Avatar from "@radix-ui/react-avatar";

function ProfileAvatar() {
  return (
    <div className="flex items-center justify-center gap-10">
      <Avatar.Root className="flex items-center space-x-3">
        <Avatar.Image
          src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
          className="w-12 h-12 rounded-full object-cover"
        />
        <Avatar.Fallback
          delayMs={600}
          className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center"
        >
          CT
        </Avatar.Fallback>
        {/* <div> */}
        {/* <span className="text-gray-700 text-sm font-medium">Jane Smith</span> */}
        {/* <span className="block text-gray-700 text-xs">
            janesmith@example.com
          </span> */}
        {/* </div> */}
      </Avatar.Root>
    </div>
  );
}

export default ProfileAvatar;
