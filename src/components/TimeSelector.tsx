import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface TimeSelectorProps {
  changeTime: (time: string, type: "openTime" | "closeTime") => void;
  selected: string | undefined;
  type: "openTime" | "closeTime";
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const timeOptions: string[] = [];
for (let i = 5; i < 24; i++) {
  for (let j = 0; j < 60; j += 30) {
    timeOptions.push(
      `${i.toString().padStart(2, "0")}:${j.toString().padStart(2, "0")}`
    );
  }
}

const TimeSelector = ({ selected, changeTime, type }: TimeSelectorProps) => {
  if (!selected) return <p>none selected</p>;

  // ensure this format 08:00 instead of 8:00
  if (type === "openTime") selected = selected.padStart(5, "0");
  return (
    <div>
      <Label htmlFor='email'>
        {" "}
        {type === "openTime" ? "Opening time" : "Closing time"}
      </Label>

      <Select
        value={selected}
        onValueChange={(e) => {
          // remove the 0 in front of the hour if hour is 0-9
          if (type === "openTime") e = e?.replace(/^0/, "");

          changeTime(e, type);
        }}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Time' />
        </SelectTrigger>
        <SelectContent className='max-h-[150px] overflow-y-auto'>
          <SelectGroup>
            <SelectLabel>{type}</SelectLabel>
            {timeOptions.map((time, index) => {
              return (
                <>
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                </>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeSelector;
